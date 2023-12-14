const app = Vue.createApp({
    data() {
      return {
        products: [],
        categories: [],
        categoryImages: [
          { category: 'electronics', image: 'images/electronicacategoria.png' },
          { category: 'jewelery', image: 'images/joyeriacategoria.png' },
          { category: "men's clothing", image: 'images/hombrecategoria.png' },
          { category: "women's clothing", image: 'images/mujercategoria.png' },
        ],
        selectedCategory: null,
        selectedProduct: null,
        showLoginForm: false,
    showRegisterForm: false,
      };
    },
    mounted() {
      this.fetchProducts();
      this.fetchCategories();
    },
    methods: {
      fetchProducts() {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            this.products = data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
      fetchCategories() {
        fetch('https://fakestoreapi.com/products/categories')
          .then(response => response.json())
          .then(data => {
            this.categories = data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      },
      filterByCategory(category) {
        this.selectedCategory = category;
      },
      showDetail(product) {
        this.selectedProduct = product;
      },
      closeDetail() {
        this.selectedProduct = null;
      },
      toggleForms() {
        this.showLoginForm = !this.showLoginForm;
        this.showRegisterForm = !this.showRegisterForm;
  
        // Mostrar u ocultar los formularios según el estado
        if (this.showLoginForm && this.showRegisterForm) {
          this.showForms();
        } else {
          this.hideForms();
        }
      },
      showForms() {
        document.getElementById('forms-container').style.display = 'grid';
      },
      hideForms() {
        document.getElementById('forms-container').style.display = 'none';
      }
    },
    computed: {
      filteredProducts() {
        return this.selectedCategory
          ? this.products.filter(product => product.category === this.selectedCategory)
          : this.products;
      },
    },
  });
  
  app.mount('#app');