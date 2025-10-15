# Arah Creative Showcase

A modern creative showcase portfolio with contact functionality powered by EmailJS.

## Features

- Responsive design with Tailwind CSS
- Contact form with EmailJS integration
- WhatsApp and email contact options
- Modern UI with shadcn components
- Form validation with Zod
- Toast notifications

## Project Setup

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables for EmailJS (see below)
cp .env.example .env
# Edit .env with your EmailJS credentials

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## EmailJS Integration

This project includes a contact form that sends emails using EmailJS. To set up:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Connect your email provider (Gmail, Outlook, etc.)
3. Create an email template with the required variables (`name`, `email`, `message`, `reply_to`)
4. Add your credentials to the `.env` file:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
   ```
5. For detailed setup instructions, see [docs/emailjs-setup.md](./docs/emailjs-setup.md)

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- EmailJS
- Zod for validation

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/81d25c52-e06a-4684-a137-e53b69c44d63) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/81d25c52-e06a-4684-a137-e53b69c44d63) and click on Share -> Publish.

## Deploying to GitHub Pages

This project can also be deployed to GitHub Pages. Here's how:

1. **Update the base path** (if needed) in `vite.config.ts`:
   - For user/organization pages: `base: "/"` 
   - For project pages: `base: "/your-repository-name/"` (replace with your actual repo name)
   - For root deployment: `base: "./"` (current setting)

2. **Build the project**:
   ```sh
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Select the source (usually the `gh-pages` branch or `/dist` folder)
   - If using GitHub Actions, you can set up automatic deployment

4. **Using GitHub Actions** (recommended):
   Create `.github/workflows/deploy.yml` with the following content:
   ```yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest

       steps:
       - name: Checkout code
         uses: actions/checkout@v3

       - name: Set up Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           
       - name: Install dependencies
         run: npm install
         
       - name: Build project
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
