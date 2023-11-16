## General Information
Azure DevOps Pipeline is an automation tool by Microsoft for CD/CI. It enables teams to automate tasks like code building, testing, and deployment, enhancing collaboration and accelerating software development. 

## Problems
In the beginning while trying to setup the Azure Pipeline it constantly failed due to insufficient parallelism capabilities. 
You can request access by filling out a form, but this takes up to three business days to complete.
The alternative I chose, was to create a self hosted agent. 
In order to setup the agent I followed the documentation provided by [Microsoft Docs](https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/windows-agent?view=azure-devops)

## Development Pipeline
In this section there are screenshots showing the different results the pipeline can return including: A failed, a successful and a running pipeline.

### Failed Pipeline
<img src="https://github.com/MrNobdy-T/Software-Deployment-WS23/assets/98278340/1050fe3f-ff1f-4799-8eaf-ebb23868d617" width="70%" height="70%">

### Succeeded Pipeline
<img src="https://github.com/MrNobdy-T/Software-Deployment-WS23/assets/98278340/16e6cb9f-8b4f-4af0-9d52-41621f57e227" width="70%" height="70%">
