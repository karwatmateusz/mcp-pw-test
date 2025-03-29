# Playwright MCP Testing

This project demonstrates testing of Model Context Protocol (MCP) using Playwright test framework.

## Features

- MCP Protocol command testing (identify, generate, stream, embed, rerank, moderations)
- Automated tests using Playwright
- GitHub Actions integration
- Chrome/Chromium browser testing

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

3. Run tests:
```bash
npm test
```

## Available Scripts

- `npm test` - Run all tests
- `npm run test:headed` - Run tests in headed mode
- `npm run test:ui` - Run tests with UI
- `npm run test:debug` - Run tests in debug mode

## Project Structure

- `/tests` - Test files
- `/playwright-report` - Test reports
- `playwright.config.ts` - Playwright configuration