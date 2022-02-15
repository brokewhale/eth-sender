import "./App.css";
import { Input } from "antd";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { TransactionContext } from "./context/TransactionContext";
import { useContext } from "react";
import { Alert } from "antd";
import { Transactions } from "./components";
function App() {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    isSuccess,
    transactions,
  } = useContext(TransactionContext);

  const handleSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  console.log("transactions", transactions);

  return (
    <>
      {isSuccess && <Alert message="Success" type="success" showIcon />}
      <div className="min-h-screen flex justify-center items-center flex-col gap-3 p-7">
        {currentAccount ? (
          <div className="text-white bg-orange-400 p-4 rounded">
            {currentAccount}
          </div>
        ) : (
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={false}
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        )}
        <div className="w-[500px] h-[500px] bg-[cornflowerblue] flex justify-center items-center p-3 flex-col gap-5">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            size="large"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: "10px" }}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            size="large"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: "10px" }}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            size="large"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: "10px" }}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            size="large"
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: "10px" }}
          />

          <Button type="primary" loading={isLoading} onClick={handleSubmit}>
            send eth
          </Button>
        </div>
        <Transactions />
      </div>
    </>
  );
}

export default App;
