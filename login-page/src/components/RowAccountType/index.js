import RowTitle from './RowTitle';
import RowType from './RowType';
import RowSubtitle from './RowSubtitle';

function RowAccountType(prop) {
  const {
    accountTypeData,
    currentAccountTypeIndex,
    setCurrentAccountTypeIndex,
    // currentAccountTypeId,
    // setCurrentAccountTypeId,
  } = prop;

  return (
    <div className="row-account-type">
      <RowTitle />
      <RowType
        accountTypeData={accountTypeData}
        currentAccountTypeIndex={currentAccountTypeIndex}
        setCurrentAccountTypeIndex={setCurrentAccountTypeIndex}
        // id 暫不需要
        // currentAccountTypeId={currentAccountTypeId}
        // setCurrentAccountTypeId={setCurrentAccountTypeId}
      />
      <RowSubtitle
        accountTypeData={accountTypeData}
        currentAccountTypeIndex={currentAccountTypeIndex}
      />
    </div>
  );
}

export default RowAccountType;
