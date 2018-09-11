# An OData-GraphQL Implementation Comparison

## Questions/Concerns

1. How does ether compare at providing a facade and/or proxy interface?
2. What does authenticated requests look like?
3. What do API calls look like?
4. What does data discovery look like?

## Top Programming Languages

From [Stack Overflow Developer Survey Results 2018](https://insights.stackoverflow.com/survey/2018/#technology)
[John Sonmez](https://simpleprogrammer.com/top-10-programming-languages-learn-2018-javascript-c-python)

1. JavaScript
2. Java
3. Python
4. C#

## GraphQL Implementations

* GraphQL Dotnet
  + <https://github.com/graphql-dotnet/graphql-dotnet>
  + C#, dotnet, dotnetcore
  + 2376 stars
  + 88 issues
  + [documentation](https://graphql-dotnet.github.io/docs/getting-started/introduction)
  + repo activity: recent < 24 hours
* GraphQL.js
  + <https://github.com/graphql/graphql-js/>
  + javascript, nodejs
  + 11426 stars
  + 54 issues
  + [documentation](https://graphql.org/graphql-js/)
  + Used as reference for other implementations
  + repo activity: recent < 24 hours
* Apollo Server
  + <https://github.com/graphql/graphql-js/>
  + javascript, nodejs
  + 5105 stars
  + 202 issues
  + [documentation](https://www.apollographql.com/docs/apollo-server/)
  + repo activity: recent < 24 hours  
  + production ready server; better documented and targeted at being a middleware
* GraphQL Java
  + <https://github.com/graphql-java/graphql-java>
  + java
  + 2515 stars
  + 34 issues
  + repo activity: recent < 24 hours
  + [documentation](https://graphql-java.readthedocs.io/en/latest/)
* Graphene
  + <https://github.com/graphql-python/graphene>
  + 3627 stars
  + 78 issues
  + repo activity: recent < 24 hours
  + [documentation](http://graphene-python.org/)

## OData Implementations

<https://www.odata.org/libraries/>

* simple-odata-server
  + https://www.npmjs.com/package/simple-odata-server
  + 65 stars
  + 5 issues
  + repo activity: > 5 months
  + minimal, repo docs only
* https://github.com/TossShinHwa/node-odata
  + javascript, nodejs
  + 295 stars
  + 11 issues
  + repo activity: > 2 years
  + [documentation](http://tossshinhwa.github.io/node-odata/en/)
* http://odata.github.io/ (WebAPI)
  + C#, dotnet, dotnetcore
  + 530 stars
  + 311 issues
  + repo activity: > 29 days
* RESTier
  + C#, dotnet, dotnetcore
  + 227 stars
  + 137 issues
  + repo activity: > 8 months
  + [documentation](http://odata.github.io/RESTier/)
    - not pretty!

## Test Scenario

### Getting Started

NOTE: Requires Node JS (Tested with 10.7.0)

```
  npm install
  npm start
```

### Flight Reservation System

- [ ] View flights
- [ ] Reserve flights
- [ ] Review overall flights status
	- [ ] Provide indicator for My Flights

### Microservices/Api's

* `flights`: query all flights
* `flight-status`: query status for a selection of flights
* `flight-reservations`: CRUD for flight reservations
