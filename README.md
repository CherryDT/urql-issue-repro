1. Run `npm install`
2. Run `npm start`
3. Observe the error:

```
Error: Cannot use GraphQLSchema "{ __validationErrors: undefined, description: undefined, extensions: {}, astNode: undefined, extensionASTNodes: [], _queryType: Query, _mutationType: Mutation, _subscriptionType: undefined, _directives: [@include, @skip, @deprecated, @specifiedBy], _typeMap: { Tweet: Tweet, ID: ID, String: String, User: User, Stat: Stat, Int: Int, Notification: Notification, Meta: Meta, Url: Url, Date: Date, Query: Query, Mutation: Mutation, Boolean: Boolean, __Schema: __Schema, __Type: __Type, __TypeKind: __TypeKind, __Field: __Field, __InputValue: __InputValue, __EnumValue: __EnumValue, __Directive: __Directive, __DirectiveLocation: __DirectiveLocation }, _subTypeMap: {}, _implementationsMap: {} }" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
    at instanceOf (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/jsutils/instanceOf.js:43:19)
    at isSchema (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/type/schema.js:32:37)
    at assertSchema (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/type/schema.js:36:8)
    at validateSchema (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/type/validate.js:34:28)
    at assertValidSchema (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/type/validate.js:56:18)
    at assertValidExecutionArguments (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/execution/execute.js:194:35)
    at execute (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/execution/execute.js:113:3)
    at executeSync (/mnt/c/Users/david/Temp/urql-test/node_modules/graphql/execution/execute.js:161:18)
    at getIntrospectedSchema (file:///mnt/c/Users/david/Temp/urql-test/node_modules/@urql/introspection/dist/urql-introspection.mjs:20:11)
    at main (file:///mnt/c/Users/david/Temp/urql-test/index.js:7:24)
```