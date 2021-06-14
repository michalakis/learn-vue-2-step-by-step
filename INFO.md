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
  - `v-on:keyUp`
  - You can reference any of the native event names
  - `@click`
  - You can replace `v-on:` with the `@` symbol for shorthand
    
- ### Episode 05: Attribute and Class Binding
  
  - `<button title="Some title that will appear on hover">Some Text</button>`
  - `Attribute binding` is accomplished by using the `v-bind` directive    
  - `v-bind:title="name of variable inside the data object"`
  - Use the colon only as shorthand
  - `:title="title"`
  - We can dynamically add/remove classes
  - `:class = { 'is-loading': isLoading }`
  - Add a class of `is-loading`, if isLoading evaluates to true
  
- ### Episode 06: The Need for Computed Properties
  
  - `Computed properties` are for when you need to compute something before rendering it onto the page
  - You can use any expression you want inside directives
  - `v-text="new Date()"`
  - `{{ message.split('').reverse().join('') }}` 
  - `Computed properties` are returned by methods which reside inside the `computed` object
  - They are referenced without the brackets
  - `v-if`
  - `v-else`
  - `Computed properties` are cached
  - `Computed properties` are reactive
  - You can access the app Instance in the console with the variable `app`
  
- ### Episode 07: Components 101

  - It is considered a `best practice` to use a hyphen in `component` names, so that it does not clash with names provided by the spec
  - `Vue.component('task-list', {
      template: '<li>Foobar</li>'
    })` 
  - You then reference the component in the html as a html tag
  - To make the content dynamic, add a `slot` to the template, anything included inside the html tag, will replace the `slot`
  - `Vue.component('task', {
      template: '<li><slot></slot></li>'
    });`
  - `Vue.component()` defines a `global` component
  - You can give a `componeent` it's own set of data by returning an object
  - For regular `Vue` instances, you can set `data` equal to an object
  - We cannot do that for `components`, because it's not linked to any single instance
  - Data can be equal to a `function` that returns an object 
  
- ### Episode 08: Components Within Components

  - You can reference a component within another component
  - You cannot use `v-for` when the parent element is the app root element `(Cannot use v-for on stateful component root elements because it renders multiple elements)`
  - Whenever you have a `template` inside a `component` it always needs to have a `single root element`
  - `ES6` `template syntax`, wrap the code in backticks to make it a template literal, you can then create multi-line strings where new lines are part of the `template literal`, you can also use string interpolation
  -  template: `
      <ul>
          <task v-for="task in tasks">{{ task.task }}</task>
      </ul>`
       
- ### Episode 09: Practical Component Exercise #1: Message

  - [Bulma CSS Framework](https://bulma.io/)
  - The recommendation is to use a hyphenated name for components
  - Some people use their business name 
  - With components, you have to be explicit with the properties
  - `v-show`
  - `data-centric` approach rather than diving into the DOM
  
- ### Episode 10: Practical Components Exercise #2: Modal

  - The `box` class in bulma adds a background color and some padding
  - `@click` is an official event
  - Vue allows you to have `custom events`
  - You can `emit()` an event
  - `@close="showModal = false"`
  - `$emit('close')`
  
- ### Episode 11: Practical Components Exercise #3: Tabs

  - [Episode Gist](https://gist.github.com/JeffreyWay/f844ca4dd1887d566759849665068162)
  - Check out `emmet`
  - We use `v-bind:` or just `:` to specify that is an object/boolean, and not a string
  - A `component` must have one master/parent/top level element only
  - `this.$children` returns all the children of the parent root element
  - You have to be explicit about the `props` you accept
  - `props: {
      name: { required: true }
    }`
  - You need to be explicit about the data the component or instance exposes, i.e., declare the data in the `data()` method
  - `data() {
      return  { tabs: [] };
    }`
  - `create()` runs code when component is created
  - `props: {
      name: { required: true },
      selected: { default: false }
    }`
  - `:class="{ 'is-active': tab.selected }"`
  - When you `bind` a property inside a component, it seems that you can return a string depending on the value of the bound property
  - `@click="selectTab(tab, $event)"`
  - `methods: {
      selectTab(tab) {
        alert(tab);
      }
    }`
  - For `components`, `methods` is a `property` that accepts an object, `data()`, `created()` and `mounted()` are methods.
  - The `data()` method inside `components` returns an object
  - `this.tabs.forEach(tab => {
        tab.isActive = (tab.name = selectedTab.name);
    });`
  - Vue doesn't like this way of using javascript to mutate a prop directly, since the value will be overwritten whenever the parent component re-render
  - Instead, use a data or computed property based on the prop's value
  - Consider the properties the component accepts as immutable
  - If you need mutability, you could create a computed property, or a piece of data 
  - Think of a component as `php class` were you define `properties` and `methods`
  - `computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }`
  
- ### Episode 12: Component Communication Example #1: Custom Events
  
  - `v-on` is a good way for the child component to communicate with the parent
  - `v-on:applied` or `@applied` lets the parent know when it has been applied, and the parent runs a method
  - Prepare your `Vue` instance at the bottom of your `JS` code, so that components are already declared when the root is instantiated
  - Q: How does `Vue` known which instance to bind the components to, if The `root Vue instance` is not saved into a variable
  - `@blur` fires when we click away from a form input, the opposite of `@focus`
  - `this.$emit('applied')`
  - You can access component or root properties in the html without the `this` keyword