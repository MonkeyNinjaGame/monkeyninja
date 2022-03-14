import { useMoralis, useNativeBalance } from "react-moralis";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;

  return <div class="nativeBalance">Balance: {balance.formatted}</div>;
}

export default NativeBalance;
