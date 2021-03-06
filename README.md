<p align="center">
    <img src="assets/connect.svg?raw=true" width="350" alt="Logo provided by Flaticon">
</p>

<p align="center">
    <img src="https://img.shields.io/azure-devops/build/dimenicsbe/utilities/172?style=flat-square" /> <img src="https://img.shields.io/azure-devops/tests/dimenicsbe/utilities/175?compact_message&style=flat-square" /> <img src='https://img.shields.io/nuget/vpre/dime.scheduler.sdk?style=flat-square' /> <img src="https://img.shields.io/azure-devops/coverage/dimenicsbe/Utilities/175?style=flat-square" /> <img<img src="https://img.shields.io/nuget/v/Dime.Scheduler.Sdk?style=flat-square" /> <img src="https://github.com/dimenics/ds-sdk/actions/workflows/codeql-analysis.yml/badge.svg" /> <img src='https://api.codeclimate.com/v1/badges/65852a78e1a9b7633574/maintainability' /> <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square"/> <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
    <a href="https://gitter.im/ds-sdk/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg?style=flat-square" /></a>
    <a href="https://github.com/dimenics/ds-sdk/discussions">
  <img src="https://img.shields.io/badge/chat-discussions-brightgreen?style=flat-square">
</a>
</p>

<h1 align="center">Dime.Scheduler SDK for .NET </h1>

This repository contains the .NET SDK for Dime.Scheduler's RESTful API services. The SDK is a gateway to connect *any* system to Dime.Scheduler through its extensive import pipeline and large collection of web APIs.

Check out the **[📚 docs »](https://dimenics.github.io/ds-sdk)** for more info.

## Installation

Use the package manager NuGet to install the base library of the SDK:

`dotnet add package Dime.Scheduler.Sdk`

## Prerequisites

To clone and run this application, you'll need Visual Studio 16.7 or higher. The application is built with C# 9 and targets .NET Standard 2.0, .NET Standard 2.1 and .NET 5.

The SDK is currently only supported for the latest version of Dime.Scheduler.

## Usage

The example below fetches the resources available in Dime.Scheduler:

```csharp
string uri = "http://mydimescheduler.com";
IAuthenticator authenticator = new FormsAuthenticator(uri,"admin","admin");

DimeSchedulerClient client = new(uri, authenticator);

IResourceEndpoint resourceEndpoint = await client.Resources.Request();
IEnumerable<Resource> resources = await resourceEndpoint.GetAsync(new ResourceRequest());

foreach (Resource resource in resources)
    Console.WriteLine(resource.Email);
```

The `DimeSchedulerClient` class is the entry point and it is where all endpoints are exposed:

```csharp
DimeSchedulerClient client = new(uri, authenticator);
```

Two arguments are required: the URI to Dime.Scheduler and credentials to connect to it. The `IAuthenticator` (with `FormsAuthenticator` as the default implementation) interface is called when an endpoint is requested:

```csharp
IResourceEndpoint resourceEndpoint = await client.Resources.Request();
```

When the credentials are invalid, an exception is thrown. Otherwise, the user is authenticated and can access the endpoint:

```csharp
IEnumerable<Resource> resources = await resourceEndpoint.GetAsync(new ResourceRequest());
```

## Import

The import API is the entry point for external systems to feed data into Dime.Scheduler. The import endpoints expose a set of import pipelines to map and save data in the Dime.Scheduler database. Any class that implements the `IImportRequestable` interface is eligible to be processed by the import service in Dime.Scheduler.

This example adds or updates a category:

```csharp
using Dime.Scheduler.Sdk.Import;

string uri = "http://mydimescheduler.com";
IAuthenticator authenticator = new FormsAuthenticator(uri, "admin", "admin");

DimeSchedulerClient client = new(uri, authenticator);

Category category = new("Category #1", "#6e62b5");
IImportEndpoint importEndpoint = await client.Import.Request();
await importEndpoint.RunAsync(category, TransactionType.Append);
```

This example adds or updates a filter group:

```csharp
using Dime.Scheduler.Sdk.Import;

string uri = "http://mydimescheduler.com";
IAuthenticator authenticator = new FormsAuthenticator(uri, "admin", "admin");

DimeSchedulerClient client = new(uri, authenticator);

FilterGroup filterGroup = new FilterGroup { Name = "Group 1" };
IImportEndpoint importEndpoint = await client.Import.Request();
await importEndpoint.RunAsync(filterGroup, TransactionType.Append);
```

## Read more

Check out the **[📚 docs »](https://dimenics.github.io/ds-sdk)** for more info.

## Contributing

We welcome contributions. Please check out the contribution and code of conduct guidelines first.

To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/mynewfeature`)
3. Commit your changes (`git commit -m 'Add mynewfeature'`)
4. Push to the branch (`git push origin feature/mynewfeature`)
5. Open a pull request

