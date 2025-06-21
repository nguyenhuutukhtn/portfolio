# GitHub Pages Deployment Setup

This guide will help you deploy your portfolio website to GitHub Pages for free.

## Prerequisites

1. Push your code to a GitHub repository
2. Your repository should be public (or you have GitHub Pro for private repos)

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Update Configuration

The workflow is already configured, but you may want to update the site URL:

1. If your repository is named `portfolio-website`, your site will be at:
   `https://YOUR_USERNAME.github.io/portfolio-website`

2. If your repository is named `YOUR_USERNAME.github.io`, your site will be at:
   `https://YOUR_USERNAME.github.io`

3. Update the site URL in `nuxt.config.ts` if needed:
   ```typescript
   site: {
     url: 'https://YOUR_USERNAME.github.io/REPOSITORY_NAME'
   }
   ```

### 3. Deploy

1. **Push to main branch** - The GitHub Actions workflow will automatically trigger
2. **Check the Actions tab** to see the deployment progress
3. **Visit your site** at the URL shown in the deployment

## Files Created

- `.github/workflows/github-pages.yml` - GitHub Actions workflow
- Updated `nuxt.config.ts` - Static site generation configuration

## How It Works

1. **Trigger**: Workflow runs on every push to main branch
2. **Build**: Nuxt generates static files in `.output/public`
3. **Deploy**: Files are deployed to GitHub Pages
4. **Access**: Your site is available at the GitHub Pages URL

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your `public/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the site URL in your configuration

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify the build works locally with `npm run build`

### Site Not Loading
- Check if GitHub Pages is enabled in repository settings
- Verify the workflow completed successfully
- Ensure the repository is public or you have GitHub Pro

### Images/Assets Not Loading
- Make sure all assets are in the `public/` directory or properly imported
- Check that paths are relative and don't start with `/` if using a subdirectory

## Environment Variables

For production, you can set environment variables in the workflow file or as repository secrets:

```yaml
env:
  NUXT_PUBLIC_SITE_URL: https://your-domain.com
  # Add other environment variables as needed
```

## Next Steps

After successful deployment:

1. **Test your site** thoroughly
2. **Set up a custom domain** if desired
3. **Configure analytics** (Google Analytics, etc.)
4. **Set up monitoring** for uptime and performance

Your portfolio is now live and will automatically update whenever you push changes to the main branch! 