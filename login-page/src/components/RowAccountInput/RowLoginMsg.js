function RowLoginMsg(prop) {
  const { loginMsg } = prop;

  return (
    <div className={`row-login-msg ${loginMsg !== null ? 'active' : ''}`}>
      {loginMsg === '通過' ? (
        <i class="success fal fa-check-circle"></i>
      ) : (
        <i className="fail fas fa-exclamation-triangle"></i>
      )}
      <span className={`msg ${loginMsg === '通過' ? 'success' : 'fail'}`}>
        {loginMsg}
      </span>
    </div>
  );
}

export default RowLoginMsg;
