const App = {
    data() {
        return {
            title: 'List of notes',
            MyPlaceHolder: 'Enter a title for the note',
            InputValue: '',
            notes:['notes one', 'notes two', 'twenty two']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.InputValue = event.target.value
        },
        
        addNewNote() {
            if (this.InputValue !== '') {
                this.notes.push(this.InputValue)
                this.InputValue = ''
            }
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        DeleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
   
}

const app = Vue.createApp(App)

app.mount('#app')