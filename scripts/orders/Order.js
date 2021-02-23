export const Order = (customerOrder, filteredProd) => {
  return `
    <div class="order">
      <p>${new Date(customerOrder.timestamp).toLocaleString('en-US')}</p>
      <p>${customerOrder.status.label}</p>
      <p>${filteredProd.name}</p>
      </div>
  `
}
