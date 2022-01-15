import { NextFunction, Request, Response } from 'express';
import HttpError from '../../errors/HttpError';
import { decode, JwtHeader, verify } from 'jsonwebtoken';
import jwks from 'jwks-rsa';

/**
 * Interface representing a JWT token
 */
export interface Jwt {
  header: JwtHeader;
  payload: JwtPayload;
}

/**
 * A payload of a JWT token
 */
export interface JwtPayload {
  iss: string;
  sub: string;
  iat: number;
  exp: number;
}

const jwksClient = jwks({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: process.env.JWK_URL as string,
});

class Auth {
  static parseUserId(jwtToken: string): string {
    const decodedJwt = decode(jwtToken) as JwtPayload;
    return decodedJwt.sub;
  }

  static async getJWK(kid: string): Promise<string> {
    const key = await jwksClient.getSigningKey(kid);
    return key.getPublicKey();
  }

  static getToken(authHeader: string | undefined): string {
    if (!authHeader) throw new Error('No authentication header');
    if (!authHeader.toLowerCase().startsWith('bearer '))
      throw new Error('Invalid authentication header');

    const split = authHeader.split(' ');
    const token = split[1];

    return token;
  }

  static async verifyToken(
    authHeader: string | undefined
  ): Promise<JwtPayload> {
    const token = this.getToken(authHeader);
    const jwt: Jwt = decode(token, { complete: true }) as Jwt;
    if (jwt) {
      console.log(jwt);
      return verify(token, await this.getJWK(jwt.header.kid as string), {
        algorithms: ['RS256'],
      }) as JwtPayload;
    } else {
      throw Error('unauthorized user');
    }
  }

  static getUserId(authHeader: string): string {
    const split = authHeader.split(' ');
    const jwtToken = split[1];

    return this.parseUserId(jwtToken);
  }
}

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await Auth.verifyToken(req.header('Authorization'));
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Authorization is required' });
  }
}
