# Screenshots


## Deployment Pipeline
* DockerHub
![](screencapture-hub-docker-repository-docker-amrhassanabdullah-travaling-helper-2022-01-14-16_03_31.png)
* CI showing a successful build and deploy job
![](screencapture-app-circleci-pipelines-github-amrHassanAbdallah-Traveling-Helper-48-workflows-a2c071c0-0af8-4839-a931-a08161f9aebb-2022-01-14-16_05_16.png)
* Monitoring using cloud watch
![](mon-1.png)
![](mon-2.png)
![](mon-3.png)
## Kubernetes
* To verify Kubernetes pods are deployed properly
```bash
kubectl get pods
```
![](pods.png)
* To verify Kubernetes services are properly set up
```bash
kubectl describe services
```
![](./services.png)

* To verify that you have horizontal scaling set against CPU usage
```bash
kubectl describe hpa
```

![](./hpa.png)

* To verify that you have set up logging with a backend application
```bash
kubectl logs {pod_name}
```

![](./logs.png)


