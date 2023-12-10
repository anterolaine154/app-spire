/*
Filename: complexCode.js

This code is a sophisticated implementation of a web-based budget management system. It includes features for creating, editing, and deleting budget categories, tracking income and expenses, and generating detailed reports.

Author: John Doe
Date: October 1, 2021
*/

// BudgetApp Class
class BudgetApp {
  constructor() {
    this.budgetCategories = [];
    this.transactions = [];
    this.currentCategoryId = 1;
    this.currentTransactionId = 1;
  }
  
  // Create a new budget category
  createCategory(name) {
    const newCategory = {
      id: this.currentCategoryId++,
      name,
      budget: 0,
      expenses: [],
    };
    this.budgetCategories.push(newCategory);
    return newCategory.id;
  }
  
  // Delete a budget category by its ID
  deleteCategory(categoryId) {
    const index = this.budgetCategories.findIndex(category => category.id === categoryId);
    if (index !== -1) {
      this.budgetCategories.splice(index, 1);
    }
  }
  
  // Record an income transaction
  recordIncome(amount, categoryId) {
    const category = this.budgetCategories.find(category => category.id === categoryId);
    if (category) {
      category.budget += amount;
      this.transactions.push({
        id: this.currentTransactionId++,
        type: 'income',
        amount,
        categoryId,
        date: new Date(),
      });
    }
  }
  
  // Record an expense transaction
  recordExpense(amount, categoryId) {
    const category = this.budgetCategories.find(category => category.id === categoryId);
    if (category) {
      category.budget -= amount;
      category.expenses.push(amount);
      this.transactions.push({
        id: this.currentTransactionId++,
        type: 'expense',
        amount,
        categoryId,
        date: new Date(),
      });
    }
  }
  
  // Generate a budget report
  generateReport() {
    const report = {
      totalBudget: 0,
      totalExpenses: 0,
      categories: [],
    };
    
    this.budgetCategories.forEach(category => {
      const categoryReport = {
        id: category.id,
        name: category.name,
        budget: category.budget,
        expenses: category.expenses.reduce((acc, expense) => acc + expense, 0),
      };
      
      report.totalBudget += categoryReport.budget;
      report.totalExpenses += categoryReport.expenses;
      report.categories.push(categoryReport);
    });
    
    return report;
  }
}

// Usage example
const app = new BudgetApp();

const category1Id = app.createCategory('Food');
const category2Id = app.createCategory('Rent');

app.recordIncome(1000, category1Id);
app.recordExpense(200, category1Id);
app.recordExpense(500, category1Id);
app.recordExpense(800, category2Id);

console.log(app.generateReport());