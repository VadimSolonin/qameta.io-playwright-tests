## Scripts 
Scripts for running automated tests:
| Description | Command |
| ------ | ------ |
| Run tests locally in a headless mode | yarn run-tests-headless |
| Run tests locally in a docker container | yarn run-tests-docker |
| After passing the autotests open the allure report | yarn open-allure-report |

## GitHub Actions Integration
A GitHub Actions workflow has been added to run autotests and generate a downloadable allure-report.html file in the workflow summary..
How to use:
1. Run the workflow via the «Actions» tab in GitHub
2. Open «Run Playwright tests in Docker»
3. Click «Run workflow»
4. After the workflow completes, find the artifact with the report in the run results
5. Download the `allure-report.html` file and open it locally in the browser