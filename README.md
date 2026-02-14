
Automated tests based on **Playwright** for [qameta.io](https://qameta.io/).

### Key features:
- Page Object Model
- Allure reports via `allure-playwright`
- `@step` decorator that wraps Page Object methods into `test.step(...)` 

### Technologies and tools

<div style="width: 50%; margin: 0 auto;">
<a href="https://www.typescriptlang.org/"><img alt="typescript" height="50" src="data/images/typescript.svg" width="50"/></a>
<a href="https://playwright.dev/"><img alt="playwright" height="50" src="data/images/playwright.svg" width="50"/></a>  
<a href="https://allurereport.org/"><img alt="allure" height="50" src="data/images/allure.svg" width="50"/></a>
<a href="https://www.docker.com/"><img alt="docker" height="50" src="data/images/docker.svg" width="50"/></a>
<a href="https://github.com/features/actions"><img alt="github-actions" height="50" src="data/images/github-actions.svg" width="50"/></a>
</div>

### Installation

1. Clone the repository
2. Install dependencies: `yarn`
3. Install Playwright: `yarn playwright install`

### Running tests

| Command | Description |
| ------ | ------ |
| `yarn run-pw-ui-mode` | Run tests locally in UI mode |
| `yarn run-tests-headless` | Run tests locally in a headless mode |
| `yarn run-tests-docker` | Run tests locally in a docker container |



### Allure reports

After a test run, results are saved into `allure-results/`.

| Command | Description |
| ------ | ------ |
| `yarn allure:generate` | Generate report |
| `yarn allure:open` | Open report in browser |
| `yarn run-tests-open-allure` | Run tests and open allure report |


### Project structure

- `tests/` — Playwright test suites
- `fixtures/` — `test` extension with page fixtures
- `pages/` — Page Object classes
- `decorators/` — decorators (e.g. `@step(...)`)

### GitHub Actions Integration

A GitHub Actions workflow has been added to run autotests and generate a downloadable allure-report.html file in the workflow summary.

How to use:
1. Open the «Actions» tab in GitHub
2. Open «Run Playwright tests in Docker» workflow»
3. Click «Run workflow»
4. After the workflow completes, find the artifact with the report in the run results
5. Download the `allure-report.html` file and open it locally in the browser