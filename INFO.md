## Learn Vue 2: Step by Step

- ### Episode 01: Basic Data Binding
  
    - We can bind a value, or a property to the value of an input
    - You would usually dive into the dom, fetch some elements, and manipulate them
    - Automatic `data binding`, bind the value of this input, to this property, when one changes, update the other
    - `Vue` does all these things for us
    - `new Vue({
        data: data
      });`
    - We pass in the data, or the model for the instance
    - Next we must define the surface area 
    - We tell it where it will be available, and it will not function outside that area 
    - `new Vue({
        el: '#root',
        data: data
      });`
    - `v-model` is a vue directive, it is a directive specifically for form inputs and controls
    - All `vue directives` begin with `v-`
    - `<input type="text" id="input" v-model="message">`
    - You can spit out the contents of a property by surrounding it with double curly braces
    - `{{ message }}`
    - Key steps:
      1. Create a `Vue` instance
      2. Bind it to an element in the `DOM`
      3. Specify some data, this is like a model for the vue
  
- ### Episode 02: Setup Vue Devtools
  
    - [Install Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
    - If we change the view i.e., update the input, the underlying data object changes at the same time
    - Two-way reactivity, when we change it on the data level, it will be reflected in the view, if we update the view, the data object is updated
    - This is known as the single source of truth
    - The data object defines the truth
  
- ### Episode 03: Lists
  
    - `v-for`
    - `v-text`
    - `<li v-for="name in names" v-text="name"></li>`
    - `mounted()` 
    - `mounted()` is a special method triggered by Vue once the instance has been mounted, once everything is ready to go, once events have been registered, once everything has been bound, once we are mounted and ready to go, run this
    
- ### Episode 04: Vue Event Listeners
    
    - `v-on` directive, is used to register event listeners with vue
    - For directives, everything on the left of the colon is the name of the directive, anything after the colon can be considered the argument 
    - In the value, we can reference any expression we want, we can update a variable/property, or reference a method
    - Any custom methods we add should be nested within the custom `methods()` object
    - `addName() {}` is ES2015 syntax
    - `addname: function() {}` is traditional syntax
    - When referencing properties in the data object, everything will be proxied correctly, so we can reference values from data, with the `this` keyword