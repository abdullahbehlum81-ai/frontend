import "@/styles/css/SearchSection.css";

function DomainSearchSection() {
  return (
    <section id="domain-search" className="domain-section">
      <div className="main-container container-spc">
        <h2 className="domain-title">Find A Perfect Domain For Your Business</h2>
        <form
          action="https://portal.efuzone.com/cart.php?a=add&domain=register"
          className="domain-form"
        >
          <input
            type="text"
            placeholder="Enter your domain name"
            name="query"
            className="domain-input"
          />
          <button type="submit" className="domain-btn">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default DomainSearchSection;
