
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        const localTheme = localStorage.getItem('theme')
        if (!localTheme) {
            localStorage.setItem('theme', systemTheme)
            document.documentElement.classList.add(systemTheme)
        }
        if (localTheme === 'dark') {
            document.documentElement.classList.add(localTheme)
        }

        function toggleTheme() {
            const button = document.querySelector('#theme-toggle')
            button.classList.toggle('theme-dark')
        
            const currentTheme = localStorage.getItem('theme')
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        
            localStorage.setItem('theme', newTheme)
        
            if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
            } else {
            document.documentElement.classList.remove('dark')
            }
        }

        document.querySelector('#theme-toggle').addEventListener('click', function() {
            toggleTheme(); 
        });