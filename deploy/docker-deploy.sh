#!/bin/bash

# Docker deployment script for portfolio website
set -e

# Configuration
IMAGE_NAME="ghcr.io/$GITHUB_REPOSITORY:latest"
CONTAINER_NAME="portfolio-website"
PORT="3000"

echo "🚀 Starting deployment of $IMAGE_NAME"

# Pull the latest image
echo "📦 Pulling latest Docker image..."
docker pull $IMAGE_NAME

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Run the new container
echo "▶️ Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:3000 \
  -e NODE_ENV=production \
  -e NITRO_PORT=3000 \
  -e NITRO_HOST=0.0.0.0 \
  $IMAGE_NAME

# Health check
echo "🔍 Performing health check..."
sleep 10
if curl -f http://localhost:$PORT > /dev/null 2>&1; then
    echo "✅ Deployment successful! Application is running on port $PORT"
else
    echo "❌ Health check failed"
    docker logs $CONTAINER_NAME
    exit 1
fi

# Cleanup old images
echo "🧹 Cleaning up old images..."
docker image prune -f

echo "🎉 Deployment completed successfully!" 