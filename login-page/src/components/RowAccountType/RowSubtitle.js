function RowSubtitle(prop) {
  const { accountTypeData, currentAccountTypeIndex } = prop;
  const name = accountTypeData[currentAccountTypeIndex]['name'].toLowerCase();

  return (
    <div className="row-subtitle">
      <h3>Hello {name}!</h3>
      <h3>Please fill out the form below to get started</h3>
    </div>
  );
}

export default RowSubtitle;
