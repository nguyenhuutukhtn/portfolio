# Docker Deployment Guide

This directory contains Docker deployment configurations and scripts for the portfolio website.

## Files Overview

- `docker-deploy.sh` - Deployment script for VPS/server deployment
- `../Dockerfile` - Multi-stage Docker build configuration
- `../docker-compose.yml` - Local development and testing
- `../.dockerignore` - Docker build context optimization

## Local Development

### Build and run locally with Docker Compose:
```bash
# Build and start the container
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Build and run manually:
```bash
# Build the image
docker build -t portfolio-website .

# Run the container
docker run -p 3000:3000 portfolio-website
```

## GitHub Actions Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Builds** the Docker image on every push to main
2. **Pushes** the image to GitHub Container Registry (ghcr.io)
3. **Tags** images with branch name and latest
4. **Supports** multi-platform builds (AMD64/ARM64)

### Container Registry

Images are pushed to: `ghcr.io/YOUR_USERNAME/portfolio-website`

## Production Deployment Options

### Option 1: VPS/Server Deployment

1. Set up your server with Docker installed
2. Add deployment secrets to your GitHub repository:
   - `HOST` - Your server IP/hostname
   - `USERNAME` - SSH username
   - `SSH_KEY` - Private SSH key

3. Update the GitHub Actions workflow to use the deployment script:

```yaml
- name: Deploy to server
  uses: appleboy/ssh-action@v1.0.0
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    key: ${{ secrets.SSH_KEY }}
    script: |
      export GITHUB_REPOSITORY=${{ github.repository }}
      bash /path/to/docker-deploy.sh
```

### Option 2: Cloud Platform Deployment

#### AWS ECS
- Use the built image with ECS task definitions
- Configure ALB for load balancing

#### Google Cloud Run
```bash
gcloud run deploy portfolio-website \
  --image ghcr.io/YOUR_USERNAME/portfolio-website:latest \
  --platform managed \
  --port 3000
```

#### Azure Container Instances
```bash
az container create \
  --resource-group myResourceGroup \
  --name portfolio-website \
  --image ghcr.io/YOUR_USERNAME/portfolio-website:latest \
  --ports 3000
```

### Option 3: Kubernetes Deployment

Create Kubernetes manifests and use the built image:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-website
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio-website
  template:
    metadata:
      labels:
        app: portfolio-website
    spec:
      containers:
      - name: portfolio-website
        image: ghcr.io/YOUR_USERNAME/portfolio-website:latest
        ports:
        - containerPort: 3000
```

## Environment Variables

The following environment variables can be configured:

- `NODE_ENV` - Set to 'production' for production builds
- `NITRO_PORT` - Port the application listens on (default: 3000)
- `NITRO_HOST` - Host the application binds to (default: 0.0.0.0)
- `EMAILJS_SERVICE_ID` - EmailJS service configuration
- `EMAILJS_TEMPLATE_ID` - EmailJS template configuration  
- `EMAILJS_PUBLIC_KEY` - EmailJS public key

## Health Checks

The Docker container includes health checks that verify the application is responding correctly on the configured port.

## Security Features

- Multi-stage builds for smaller production images
- Non-root user execution
- Security-focused Alpine Linux base image
- Minimal attack surface 