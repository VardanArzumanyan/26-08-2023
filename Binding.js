const Pagination = {
  pageSize: 0,
  currentPage: 1,

  init: function (arr, pageSize) {
    this.arr = arr;
    this.pageSize = pageSize;
    this.currentPage = 1;
  },

  prevPage: function () {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this;
  },

  nextPage: function () {
    if (this.currentPage < this.totalPage()) {
      this.currentPage++;
    }
    return this;
  },

  firstPage: function () {
    this.currentPage = 1;
    return this;
  },

  lastPage: function () {
    this.currentPage = this.totalPage();
    return this;
  },

  goToPage: function (page) {
    if (page >= 1 && page <= this.totalPage()) {
      this.currentPage = page;
    }
    return this;
  },

  getPageItems: function () {
    let start = (this.currentPage - 1) * this.pageSize;
    let end = start + this.pageSize;
    return this.arr.slice(start, end);
  },

  totalPage: function () {
    return Math.ceil(this.arr.length / this.pageSize);
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

console.log(Pagination.getPageItems());
Pagination.nextPage();
console.log(Pagination.getPageItems());
Pagination.nextPage().nextPage();
console.log(Pagination.getPageItems());
Pagination.goToPage(7);
console.log(Pagination.getPageItems());
