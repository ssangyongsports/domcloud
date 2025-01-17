---
sidebar_position: 1
title: Introduction
---

# Introduction

You found our documentation site! It's a place where you can find all the information you need to get started with DOM Cloud. We've tried to make it as easy as possible, but if you have any questions, please don't hesitate to contact us.

We use GitHub for [Issue Tracking](https://github.com/domcloud/domcloud-io/issues) and [Discussions](https://github.com/domcloud/domcloud-io/discussions). For private questions please send an email to [willnode@wellosoft.net](mailto:willnode@wellosoft.net).

## What is DOM Cloud? And why?

DOM Cloud is a cloud hosting solution that allows you to host your website on our servers. While we are much like other cloud providers seen from above, we are pretty much different in many ways:

1. We don't serve your website using containers nor serverless functions, we just give you raw access to a non-sudo user in our servers. That's why we call ourself *Cloud hosting solution*.
2. But unlike those other "hosting solutions", we want you to have better tooling; for example, with our platform you can sync with GitHub every push, just like other modern cloud providers there.
3. If you use our platform, we want you to get the most benefit of raw access to our servers, for example with SSH you can also open Visual Studio Code with remote SSH so you can do awesome things, like cloud working environment for example.


## Our Philosophy

We want students, teachers, developers with their hobby time make use of our platform for a better experience with putting things online. Personally, the reason I created this because I once struggled to find a host service that's good enough for a university project.

That's just a reasoning and we have a separate page to read more about our philosophy. [Check it out!](./philosophy.md) <br/>I recommend you to read it first so you can have a better view of what we're trying to do and not to do.

## Features

Let's sump up the key benefits of DOM Cloud starting from what you see in our landing page:

### Portal Toolbox

We have tools, many of them, and they have their own separate pages.

+ Web-Based Tools
+ Virtualmin
+ Runner
+ Visual Studio Code
+ GitHub Integration

### Server Services

Inside the server we have many daemon services running:

+ NginX (HTTP Proxy)
+ Passenger Phusion (Runtime Manager)
+ PHP-FPM (PHP Runtime Manager)
+ SSL (HTTPS Certbot)
+ DNS (Name Daemon Server)
+ Firewall (Whitelist)

### Language Compilers Support

We host a range of code language support and they have separate guides pages.

+ [PHP](../deploying/php.md)
+ [Node.js](../deploying/node.md)
+ [Python](../deploying/python.md)
+ [Ruby](../deploying/ruby.md)
+ [Other languages](../deploying/)

### Database Instance Support

We support MariaDB (MySQL), PostgreSQL, and SQLite. Well, who doesn't support SQLite?

+ [MariaDB](../features/database.md)
+ [PostgreSQL](../features/database.md)

### Other Pages

(TODO) Some pages are dedicated to other things, like:

+ Set up custom domain
+ Set up subdomain
+ Troubleshooting
