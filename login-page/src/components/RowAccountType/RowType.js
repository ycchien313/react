const accountTypeClick = (setCurrentAccountTypeIndex, index) => {
  setCurrentAccountTypeIndex(index);
  const inputEmail = document.querySelector('.row-email input');
  inputEmail.focus();
};

function RowType(prop) {
  const {
    accountTypeData,
    currentAccountTypeIndex,
    setCurrentAccountTypeIndex,
    // ↓ id 暫不需要
    // currentAccountTypeId,
    // setCurrentAccountTypeId,
  } = prop;

  return (
    <div className="row-type">
      {accountTypeData.map((value, index) => {
        return (
          <figure
            key={value.id}
            className={`box-container ${
              currentAccountTypeIndex === index ? 'active' : ''
            }`}
            onClick={() => {
              accountTypeClick(setCurrentAccountTypeIndex, index);
            }}
          >
            <img src={value.src} alt="" />
            <figcaption>{value.name}</figcaption>
            <div className="check-box">
              <i className="fal fa-check"></i>
            </div>
          </figure>
        );
      })}
    </div>
  );
}

export default RowType;
