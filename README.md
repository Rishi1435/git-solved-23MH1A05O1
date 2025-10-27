# DevOps Simulator

A comprehensive CI/CD configuration management tool for enterprise deployments.

## Project Status
- **Version**: 1.0.0 (Production), 2.0.0-beta (Development)
- **Environments**: Production & Development
- **Student**: P.Vishnu Venkata Rishi
- **Student ID**: 23MH1A05O1

## Features

### Core Features
- Automated deployment scripts
- Real-time monitoring
- Configuration management
- Backup and recovery system

### Production Features
- SSL/TLS encryption
- Auto-scaling
- Load balancer integration
- Scheduled backups

### Development Features (Beta)
- Docker Compose integration
- Hot reload enabled
- Debug mode active
- Enhanced logging
- Mock external APIs
- Multi-cloud support (AWS, Azure, GCP)
- Slack/Discord notifications
- Kubernetes orchestration support
- Advanced blue-green deployment
- Enhanced monitoring dashboard
- OAuth2 authentication

## Quick Start

### Production Mode
export DEPLOY_ENV=production
./scripts/deploy.sh

text

### Development Mode
export NODE_ENV=development
npm install
npm run dev

Access dashboard at http://localhost:3000
text

## Development Setup
Install dependencies
npm install

Run tests
npm test

Start development server
npm run dev

text

## Documentation
See `/docs` folder for detailed documentation.

## Contributing
Please read CONTRIBUTING.md before submitting pull requests.

## License
MIT License