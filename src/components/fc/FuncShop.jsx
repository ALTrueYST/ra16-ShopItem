export const FuncShop = ( props ) => {
  const { item } = props;

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div>
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{item.currency}{item.price}</div>
        <button>Add to cart (FC)</button>
      </div>
    </div>
  )
}
