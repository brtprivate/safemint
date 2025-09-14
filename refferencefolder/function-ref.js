const contAddress = "0xFc6d1717F6173508FA97549C13B4bF58FDBCfC39";
const tokenAddress = "0x8F70b18Ea189ff5E05C6862481EdB4949a487513";
const usdtAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";

const _abi = mainABIData;
const token_abi = tokenContractABI;

//const webUrl = 'http://localhost/web3_project/inOut/';
const webUrl = 'https://in-out.live/inOut/';
const base = 1e18;

let usdtContract;
let tokenContract;
let walletAddressCopy = "";
let walletConnectText = "";

// web3 = new Web3(window.ethereum);
// const contract = new web3.eth.Contract(contractAbi, contractAddress);

let web3;
let MainContract;

let aggGgasPrice;

let newPrice;





//==============================================================



const rings = `<div class="ring"></div><div class="ring"></div><div class="ring"></div>`;
// const loadingMessage = `<span class="loading">Processing...</span>`;
const loadingMessage = `
<div class="spinner-bubble spinner-bubble-primary m-5"></div>`;



//==============================================================

//async function syncGasPrice(){

//const gasPrice = await web3.eth.getGasPrice();
//const aggressiveGasPrice = web3.utils.toWei((parseFloat(web3.utils.fromWei(gasPrice, 'gwei'))).toString(), 'gwei');

//aggGgasPrice=aggressiveGasPrice;

//}

//================================gas price agrigeter========================





async function syncGasPrice() {
  try {
      // Fetch the current gas price from the network
      let gasPrice = await getPolygonGasPrice();
      let gasPriceGwei;
   
      console.log("gas price:"+gasPrice);
  
      if(!gasPrice || isNaN(gasPrice)){
      
                  gasPrice = await web3.eth.getGasPrice();

                  if (!gasPrice || isNaN(gasPrice)) {
                      throw new Error('Invalid gas price received');
                  }


                gasPriceGwei = parseFloat(web3.utils.toWei(gasPrice.toString(),'wei'));

                console.log("gas to wei:"+gasPriceGwei);
      
      
      }else{
      
           

     		 if (!gasPrice || isNaN(gasPrice)) {
          		throw new Error('Invalid gas price received');
     		 }


            gasPriceGwei = parseFloat(web3.utils.toWei(gasPrice.toString(),'gwei'));

            console.log("gas to gwei:"+gasPriceGwei);
      
      
      }
     
        console.log("gas price:"+gasPrice);
     
      // Assign the aggressive gas price to your variable
        aggGgasPrice = gasPriceGwei;
    
  } catch (error) {
      console.error('Error in syncGasPrice:', error.message);
  }
}




async function getPolygonGasPrice() {
  const url = "https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=5R63IJJZ2366KYCIZQUMZW6EXIPDAVCJCK";

  try {
    const response = await fetch(url);
      if (!response.ok) {
         
          throw new Error(`HTTP error! status: ${response.status}`);
      }
    const data = await response.json();
    const gasData = data.result;
    console.log(data.result);


      console.log("Polygon Gas Prices:");
      console.log(`Safe Low: ${gasData.SafeGasPrice} Gwei`);
      console.log(`Standard: ${gasData.ProposeGasPrice} Gwei`);
      console.log(`Fast: ${gasData.FastGasPrice} Gwei`);
      console.log(`Base Fee: ${gasData.suggestBaseFee} Gwei`);
    
      return gasData.FastGasPrice;
  } catch (error) {
      console.error(`An error occurred: ${error.message}`);
      return null;
  }
}





  $('#copyButton').on('click', function() {
    // Get the base URL and referral address value
    var baseUrl = (webUrl+'sign.php?ref=');
    //http://127.0.0.1:5500/
    var referralAddress = walletAddressCopy;
    
    // Construct the full referral URL without spaces
    var fullReferralUrl = baseUrl + referralAddress;
  
    // Create a temporary hidden input element
    var $tempInput = $('<input>');
    $tempInput.val(fullReferralUrl).appendTo('body').select();
  
    // Select the text and copy it
    $tempInput[0].setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
  
    // Remove the temporary input element
    $tempInput.remove();
  
    // Update button text to indicate success
    $('#copyButton').text('Copied');
  });




// Function to format a value as currency
function formatCurrency(value) {
    return '$ ' + value.toFixed(2);
}


function updateValues(activeElementId) {
    let depositInUSDT = parseFloat($('#depositInUSDT').val()) || 0;
    let depositInToken = parseFloat($('#depositInToken').val()) || 0;
    
    console.log("price: "+newPrice);
    let tokenPrice = newPrice;
    let totalDeposit;
  
    if (activeElementId === 'depositInUSDT') {
        // If USDT is active, set Token to 0
        totalDeposit = depositInUSDT;
        // token deposit value
        depositInToken = ((totalDeposit*base)/tokenPrice);
        $('#depositInToken').val(depositInToken);
    } else if (activeElementId === 'depositInToken') {
        // If Token is active, set USDT to 0
        totalDeposit = depositInToken * tokenPrice/base;
        $('#depositInUSDT').val(totalDeposit);
    }

    console.log(totalDeposit);
    
    const InstaSave = formatCurrency(totalDeposit*5/100);
 ;
    $('#instasave').text(InstaSave);

    // Calculate yearly value (300% of total deposit)
    let earlyValue = formatCurrency(totalDeposit * 3);
    $('#eraningPotantial').text(earlyValue);

  
}



$('#depositInUSDT').on('input', function() {
    updateValues('depositInUSDT');  
});
$('#depositInToken').on('input', function() {
    updateValues('depositInToken'); 
});







//=========================document ready box=====================


async function handleWalletConnection(buttonId) {
  
  walletConnectText = await connectAndDisplayWalletAddress();
  console.log("wallet address " + walletAddressCopy);

  const trimmedAddress = trimAddress(walletConnectText);


  if (walletConnectText != null && walletConnectText != undefined) {
    $(buttonId).text(trimmedAddress);
     
  	
  }

}

console.log("I am wallet address"+ walletConnectText);


$("#connectWalletBtn, #connectWalletBtn2").click(async function (e) {
  await handleWalletConnection(`#${$(this).attr("id")}`);

});




$('#signIn').click(async function(e){

  e.preventDefault();


    console.log("fire...");


    const walletAddress = await walletConnect();
    console.log("my Wallet address: ", walletAddress);

    if (walletAddress) {
      web3 = new Web3(window.ethereum);

      // Initialize the contract object of click login
      MainContract = new web3.eth.Contract(mainABIData,contAddress);

      console.log("my contract data: ", MainContract);

      //------------------------- onload call read start-----------------------------------------------------------------------
      walletAddressCopy = walletAddress;
      console.log("copy wallet address:", walletAddressCopy);

     


     //document.cookie = "walletAddress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/test/;";

	  const isUserReg = await validateUser(walletAddressCopy);
    
    
    
    	  if (isUserReg) {
        
        	
        	window.location.replace(webUrl+'main.php');
        
        }else{
        
        
        	alert('Please Register First...');
        
        
        	window.location.replace(webUrl+'sign.php');
        
        
        }
    
    
    
    }



});



// onload automatic clicked connect wallet button
$(window).on("load", async function () {
  console.log("hello testing");

console.log('tt:'+window.location.pathname);

  if   (  (window.location.pathname == '/inOut/sign.php') || (window.location.pathname == '/inOut/sign')  ) {

		console.log("block executed");
  
       $('#signIn').click();
  
  }
  $("#connectWalletBtn").click();
  $("#connectWalletBtn2").click();
  
  console.log("connect wallet address:" + walletConnectText);
});



startAutoUpdatingPools();



//===============================================================================================TEST NET==============================================================



// // for wallet connect

 /*async function walletConnect() {
   try {
     if (window.ethereum) {
       window.web3 = new Web3(window.ethereum);
       const chainId = await window.ethereum.request({
         method: "eth_chainId",
       });
       console.log("chain ID: ", chainId);
       const testChainId = "0x13882"; // Polygon Mumbai testnet chain ID
       if (chainId !== testChainId) {
         try {
           await window.ethereum.request({
             method: "wallet_switchEthereumChain",
             params: [{ chainId: testChainId }],
           });
         } catch (switchError) {
           if (switchError.code === 4902) {
             // Chain not added
             try {
               await window.ethereum.request({
                 method: "wallet_addEthereumChain",
                 params: [
                   {
                     chainId: testChainId,
                     chainName: "Amoy",
                     nativeCurrency: {
                       name: "Matic",
                       symbol: "MATIC",
                       decimals: 18,
                     },
                     rpcUrls: ["https://rpc-amoy.polygon.technology"],
                     blockExplorerUrls: ["https://www.oklink.com/amoy"],
                   },
                 ],
               });
             } catch (addError) {
               console.error("Error adding Polygon mainnet:", addError);
               return null;
             }
           } else {
             console.error("Error switching to Polygon Mainnet", switchError);
             return null;
           }
         }
       }
       await window.ethereum.enable();
       const accounts = await window.web3.eth.getAccounts();
       return accounts[0] || null;
     } else if (window.web3) {
       window.web3 = new Web3(window.web3.currentProvider);
       const accounts = await window.web3.eth.getAccounts();
       return accounts[0] || null;
     } else {
       alert(
         "Non-Ethereum browser detected. You should consider installing MetaMask!"
       );
       return null;
     }
   } catch (error) {
     console.error(error);
     return null;
   }
}*/





// ===========================================MAINNET================================================


// for wallet connect


/*async function walletConnect() {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      const testChainId = "0x38"; // Polygon Mumbai testnet chain ID
      if (chainId !== testChainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: testChainId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            // Chain not added
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: testChainId,
                    chainName: "BNB Smart Chain Mainnet",
                    nativeCurrency: {
                      name: "BNB",
                      symbol: "BNB",
                      decimals: 18,
                    },
                    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
                    blockExplorerUrls: ["https://bscscan.com"],
                  },
                ],
              });
            } catch (addError) {
              console.error("Error adding BNB Smart Chain mainnet:", addError);
              return null;
            }
          } else {
            console.error("Error switching to BNB Smart Chain Mainnet", switchError);
            return null;
          }
        }
      }
      await window.ethereum.enable();
      const accounts = await window.web3.eth.getAccounts();
      return accounts[0] || null;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const accounts = await window.web3.eth.getAccounts();
      return accounts[0] || null;
    } else {
      alert(
        "Non-Ethereum browser detected. You should consider installing MetaMask!"
      );
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}*/

async function walletConnect() {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      const testChainId = "0x89"; // Polygon Mumbai testnet chain ID
      if (chainId !== testChainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: testChainId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            // Chain not added
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: testChainId,
                    chainName: "Polygon Mainnet",
                    nativeCurrency: {
                      name: "POL",
                      symbol: "POL",
                      decimals: 18,
                    },
                    rpcUrls: ["https://polygon-rpc.com/"],
                    blockExplorerUrls: ["https://polygonscan.com"],
                  },
                ],
              });
            } catch (addError) {
              console.error("Error adding Polygon mainnet:", addError);
              return null;
            }
          } else {
            console.error("Error switching to Polygon Mainnet", switchError);
            return null;
          }
        }
      }
      await window.ethereum.enable();
      const accounts = await window.web3.eth.getAccounts();
      return accounts[0] || null;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const accounts = await window.web3.eth.getAccounts();
      return accounts[0] || null;
    } else {
      alert(
        "Non-Ethereum browser detected. You should consider installing MetaMask!"
      );
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}



function initializeDataTable(tableId) {
    $(tableId).DataTable({
        paging: true,           // Enables pagination
        searching: true,        // Enables search filter
        ordering: true,         // Enables column ordering
        info: true,             // Shows table info
        autoWidth: false,       // Disables automatic column width calculation
        responsive: true,       // Makes the table responsive
        lengthMenu: [10, 25, 50, 100], // Sets pagination options
        language: {
            search: "Filter records:", // Customizes the search input label
        }
    });
}



async function connectAndDisplayWalletAddress() {
  try {
    const walletAddress = await walletConnect();
    console.log("1-address: ", walletAddress);

    if (walletAddress) {
        web3 = new Web3(window.ethereum);

        // Initialize the contract object
        MainContract = new web3.eth.Contract(mainABIData,contAddress);
        tokenContract = new web3.eth.Contract(token_abi,tokenAddress);
        usdtContract = new web3.eth.Contract(token_abi,usdtAddress);

        console.log("1-contract data ", MainContract);


        //------------------------- onload call read start-----------------------------------------------------------------------
        walletAddressCopy = walletAddress;
        console.log("1-Connected wallet address:", walletAddressCopy);

        var trimWalletAddress = trimAddress(walletAddressCopy);


        // document.cookie = "walletAddress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/test/;";

      const isUserReg = await validateUser(walletAddressCopy);
      
 
      if (isUserReg){
 

        if (window.location.pathname === '/test/sign.php' || window.location.pathname === '/test/sign') {
  
  
  
      }else{

  
  		
	      document.cookie = "userWallet=" + encodeURIComponent(walletAddressCopy) + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";


        var refUrl = (webUrl+'sign.php?ref=');
        var referralLink =  refUrl + trimWalletAddress;
      
        $('#refAddress').text(trimAddress(walletAddressCopy));
      
        $('#refAddressLink').val(referralLink);


        $('.user-status').html('<i class="fas fa-circle status active"></i>');

       $('.historyLink').attr('href', `${webUrl}history.php?wallet=${encodeURIComponent(walletAddressCopy)}`);

		$('#connected_wallet').val(walletAddressCopy);
      
      	

        await fetchUserData(); 
      
      
         const tagName=  await fetchTagName(walletAddressCopy);
      
      
      	if (tagName==''){

        		console.log("tagModal");
			$('#tagReceiverModel').modal('show');
        	console.log("started");
			
		}

  
          console.log(`here is tag name : ${tagName}  walletValue: ${$('#connected_wallet').val()}`);
      

      }


    } else {
       console.log("Current pathname:", window.location.pathname);

      if (window.location.pathname === 'main' || window.location.pathname === '/inOut/main.php') {
          alert("You are not registered. Please register first.");
      
      
          window.location.href = (webUrl+'sign.php');

          $('.user-status').html('<i class="fas fa-circle status inactive"></i>');
        
      } else {
          $('.user-status').html('<i class="fas fa-circle status inactive"></i>');
          $('#signupDiv').hide();
      }
    }

      
    createUserObject()
      
  
    } else {
      console.log("Failed to connect wallet.");
      walletAddressCopy = null; // Reset walletAddressCopy if connection failed
    }
    return walletAddress;
  } catch (error) {
    console.error(error);
    return null;
  }
}




// Re-render pools and sync gas price every 20 seconds



//===============================================EVENTS === DATA ======================================================>

$(document).on("click", ".detailsPara", function () {
  var grandParent = $(this).parent().parent();

  console.log(grandParent);

  var carat = $(this).next(); // Assuming the element you want to toggle the class for follows the clicked element

  // Check if the text of the clicked element is "Hide"
  if ($(this).text() === "Hide") {
    // If text is "Hide", change it to "Details"
    $(this).text("Details");
    // Remove the 'fa-caret-up' class and add the 'fa-caret-down' class to the element
    carat.removeClass("fa-caret-up").addClass("fa-caret-down");
  } else {
    // If text is not "Hide", change it to "Hide"
    $(this).text("Hide");
    // Remove the 'fa-caret-down' class and add the 'fa-caret-up' class to the element
    carat.removeClass("fa-caret-down").addClass("fa-caret-up");
  }

  // Find the next sibling element of the grand parent
  var nextSibling = grandParent.next();

  console.log(nextSibling);

  // Toggle the visibility  of the next sibling element
  nextSibling.toggle();
});



$(document).on("click", "#regBtn", async function () {
  
 let stage;
try {


  const isUserReg = await validateUser(walletAddressCopy);

  console.log("registration status"+isUserReg);



  if (isUserReg && (window.location.pathname === '/inOut/sign.php' || window.location.pathname === '/inOut/sign' )) {
  
		window.location.replace(webUrl+'main.php');
  
  	   return 0;
  
 
   }

   stage =  { transactionStage: 0, transactionHash: '', validation: 'Registration is processing now...' };
   transactionPopup(stage);



    let userReferral = $('#referralAddress').val();

    if (!userReferral) {
      userReferral = prompt("Enter your Referral:");
      
    }

    // Check if user entered a referral
    if (!userReferral) {
      console.log("No referral address provided.");
      return; // Exit function if no referral address provided
    }

    console.log("User referral:", userReferral);
    console.log("Connected Wallet Address:", walletAddressCopy);
  
    stage =  { transactionStage: 0, transactionHash: '', validation: 'Transaction sending please wait...' };
    await syncGasPrice();

    // Send transaction
    const transaction = await MainContract.methods.regUser(userReferral).send({
      from: walletAddressCopy,
      gasPrice: aggGgasPrice,  // Set a higher gas price to execute the transaction faster
    
      gasLimit :1000000
    
    });

    // Display status while waiting for confirmation
    console.log("Transaction is pending confirmation...");

    // Get transaction receipt to check if it is confirmed
    const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);

    // Check if transaction is confirmed
    if (receipt && receipt.status) {
    
      console.log("Transaction successful:", transaction.transactionHash);

          stage.transactionStage=1;
      	  stage.transactionHash=transaction.transactionHash;
		  stage.validation='Transaction successful';

      	  transactionPopup(stage);
    
         const isUserReg = await validateUser(walletAddressCopy);
   
    
        if (isUserReg) {


            window.location.replace(webUrl+'main.php');


        }


    } else {
  
        console.error("Transaction failed:", transaction.transactionHash);
        stage.transactionStage=2;
      	stage.transactionHash=transaction.transactionHash;
			  stage.validation='Transaction failed';
        transactionPopup(stage);
      // Transaction failed
    
    }


  } catch (error) {
        console.error("Error sending transaction:", error);
        stage.transactionStage=2;
      	stage.transactionHash='';
			  stage.validation='Transaction failed';
        transactionPopup(stage);
  
  	alert("Transaction failed");
    // Error occurred while sending transaction
  }
});



//======================================================================CORE-FUNCTION=============================================>

async function waitForApprovalConfirmation(approveTx) {
  return new Promise((resolve, reject) => {
    approveTx
      .on("receipt", (receipt) => {
        console.log("Approval transaction confirmed:", receipt);
        resolve(receipt);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}


async function checkAndApproveAllowance(amount,aprovalContract) {
  
  console.log("checkAndApproveAllowance function amount parameter: " + amount);
  
  // Convert USDT amount to its smallest denomination (assuming 6 decimals)
  const totalAmount = amount; 
  
  console.log("approval Amount: " + totalAmount);

  try {
    // Get current balance for USDT and MBT tokens
    console.log("get balance");
    console.log(walletAddressCopy);
    console.log(aprovalContract);
    
    const currentBalance = await aprovalContract.methods.balanceOf(walletAddressCopy).call();

    console.log("get balance" ,currentBalance);

    // Get the current allowance for the selected token
    const currentAllowance = await aprovalContract.methods.allowance(walletAddressCopy,contAddress).call();
 
    console.log("Check Allowance: " + currentAllowance);
    console.log("Check Balance: " + currentBalance);
   

    // Check if balance is less than the requested amount
    if (currentBalance < totalAmount) {
      return { success: false, errorMsg: "Insufficient balance" };
    }

    console.log("Balance check passed");

    // Check if current allowance is less than the requested amount
    if (currentAllowance >= totalAmount) {
      console.log("Sufficient allowance, no need for approval.");
      return { success: true, errorMsg: "" };
    }

    console.log("Approval needed, insufficient allowance");

    await syncGasPrice();
    console.log("Gas Price: " + aggGgasPrice);
   

    // Call approve method to approve the required amount
    const approveTx = await aprovalContract.methods
      .approve(contAddress,BigInt(totalAmount))
      .send({ from: walletAddressCopy, 
        gasPrice: aggGgasPrice,
        gasLimit :100000 
      });

    // Wait for the transaction to be mined
    let receipt = null;
    while (receipt === null) {
      receipt = await web3.eth.getTransactionReceipt(approveTx.transactionHash);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before polling again
    }

    // Check if the approval was successful
    const newAllowance = await aprovalContract.methods.allowance(walletAddressCopy,contAddress).call();
    
    if (newAllowance >= totalAmount) {
      return { success: true, errorMsg: "" };
    } else {
      return { success: false, errorMsg: "Approval unsuccessful" };
    }
  } catch (error) {
    return { success: false, errorMsg: error.message };
  }
}

//=======================countdown timmer==============

function myCallback(timestamp, elementId) {
  // Get the element by its ID
  var element = $("#" + elementId);

  // Calculate the countdown date from the timestamp
  var countDownDate = new Date(timestamp * 1000).getTime();

  // Update the time remaining every second
  var intervalId = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var tmp = hours + ":" + minutes + ":" + seconds;

    // Update the element's text with the time remaining
    element.text(tmp);

    // Check if the countdown has finished
    if (distance < 0) {
      clearInterval(intervalId);
      element.text("0");
    }
  }, 1000);
}



async function validateUser(userAddress){

    console.log("user validation run.." + userAddress);


    try {


      const joined = await MainContract.methods.userInfos(String(userAddress)).call({ from: walletAddressCopy });

      console.log(joined.joined);
      

      return joined.joined;
      

    }catch (e){

      console.log(e);
      return false;

    }


}


// Function to fetch pool information for a given pool number
async function fetchUserObj() {

  
   console.log(MainContract); 
 
  
 
    const userInfo = await MainContract.methods
    .userInfos(walletAddressCopy)
    .call({ from: walletAddressCopy });


    const userEarns = await MainContract.methods
    .bonusInfos(walletAddressCopy)
    .call({ from: walletAddressCopy });

    const dircets = await MainContract.methods
    .directUser(walletAddressCopy)
    .call({ from: walletAddressCopy });


    const userPotantial = await MainContract.methods
    .unStakePotential(walletAddressCopy)
    .call({ from: walletAddressCopy })
    
    console.log(userPotantial);

    const isActive = await MainContract.methods
    .activeUser(walletAddressCopy)
    .call({ from: walletAddressCopy })
    
    
    
    

 

  //==============================Token initilization======================

  const tokenPrice = await tokenContract.methods
    .rateInUSDT()
    .call({ from: walletAddressCopy });
  
  const inoutBalance= await tokenContract.methods
    .balanceOf(walletAddressCopy)
    .call({ from: walletAddressCopy });
  
  const usdtBalance= await usdtContract.methods
    .balanceOf(walletAddressCopy)
    .call({ from: walletAddressCopy });
 
  const ethBalance = await web3.eth.getBalance(walletAddressCopy);
  
 

  return {
    tokenPrice,
    ethBalance,
    usdtBalance,
    inoutBalance,
    userInfo,
    userEarns,
    dircets,
    userPotantial,
    isActive
  };
}

async function fetchTOkenInfo() {}

async function fetchUserStakeInfo() {}

console.log("Checking");


const $selectElement = $("#tierOption");



//==============================================WRITE CALLS=======================>

async function btnDepositStake(btnEvent){


// it should alway on the top so it can be access in all scope 
   
   
    const modalObj = await createNewModal('StakeModel');
    const farmerWallet = modalObj.thirdPartyWalletValue==''?walletAddressCopy:modalObj.thirdPartyWalletValue;
    let stage =  { transactionStage: 0, transactionHash: '', validation: 'Transaction is processing now...' };
    transactionPopup(stage);
    const baseAmount =  parseFloat($('#depositInUSDT').val()) || 0;
    const amountValue = parseInt(web3.utils.toWei(baseAmount.toString(),'ether'));
   
  
  try {

    const approbObj = await switchToken(amountValue);
    const validation = await checkAndApproveAllowance(approbObj.amount,approbObj.approvContract);
  
  	//const validation = true; // just for testing later will remove this 
    
    if (validation.success==false){
      
      alert(validation.errorMsg);  
      return 0;
      
    }else{

      stage =  { transactionStage: 0, transactionHash: '', validation: 'Token Approval is succeeded ...' };
      

    }
  
     
  		await syncGasPrice();
      console.log("base count "+baseAmount);
      transactionPopup(stage);
      // Send transaction
      const transaction = await MainContract.methods.makeStake(baseAmount,farmerWallet).send({
          from: walletAddressCopy,
          gasPrice:aggGgasPrice,
          gasLimit :12000000
      });
  
      // Display status while waiting for confirmation
      stage =  {transactionStage: 0, transactionHash: '', validation: 'Sacke Deposit is processing now...' };
      transactionPopup(stage);

      // Get transaction receipt to check if it is confirmed
      const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
  
      // Check if transaction is confirmed
      if (receipt && receipt.status) {
          console.log("Transaction successful:", transaction.transactionHash);
          // Transaction succeeded
      
      		stage.transactionStage=1;
      		stage.transactionHash=transaction.transactionHash;
			    stage.validation='Transaction successful';

      		transactionPopup(stage);
            await createUserObject();
            $('#depositInUSDT').val(0);
            updateValues('depositInUSDT'); 
            

      
      } else {
          console.error("Transaction failed:", transaction.transactionHash);
          // Transaction failed
      }
  } catch (error) {
      console.error("Error sending transaction:", error);
  
        stage.transactionStage=2;
        stage.transactionHash='';
        stage.validation='Error sending transaction';
        transactionPopup(stage);
      // Error occurred while sending transaction
  }

}

async function btnBuyToken(btnEvent){


  // it should alway on the top so it can be access in all scope 

      let stage =  { transactionStage: 0, transactionHash: '', validation: 'Transaction is processing now...' };
      transactionPopup(stage);
      const usdAmount =  parseFloat($('#depositInUSDT').val()) || 0;
      console.log("buy usd Amount"+usdAmount);
      
      //parseFloat(web3.utils.toWei(gasPrice.toString(),'wei'));
      const approvalAmount = parseInt(web3.utils.toWei(usdAmount.toString(),'ether')); // 1 USDDEFI in Wei (assuming 18 decimals)

      console.log("aprroval "+approvalAmount);

   
    
    try {
  
    
      const validation = await checkAndApproveAllowance(approvalAmount,usdtContract);
    
      //const validation = true; // just for testing later will remove this 
      
      if (validation.success==false){
        
        alert(validation.errorMsg);  
        return 0;
        
      }else{
  
        stage =  { transactionStage: 0, transactionHash: '', validation: 'Token Approval is succeeded ...' };
        
  
      }
    
       
        await syncGasPrice();
        console.log("base count "+usdAmount);
        transactionPopup(stage);
        // Send transaction
        const transaction = await MainContract.methods.buyToken(usdAmount).send({
            from: walletAddressCopy,
            gasPrice:aggGgasPrice,
            gasLimit :3000000
        });
    
        // Display status while waiting for confirmation
        stage =  {transactionStage: 0, transactionHash: '', validation: 'Sacke Deposit is processing now...' };
        transactionPopup(stage);
  
        // Get transaction receipt to check if it is confirmed
        const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
    
        // Check if transaction is confirmed
        if (receipt && receipt.status) {
            console.log("Transaction successful:", transaction.transactionHash);
            // Transaction succeeded
        
            stage.transactionStage=1;
            stage.transactionHash=transaction.transactionHash;
            stage.validation='Transaction successful';
  
            transactionPopup(stage);
              await createUserObject();
              $('#depositInUSDT').val(0);
              updateValues('depositInUSDT'); 
              
  
        
        } else {
            console.error("Transaction failed:", transaction.transactionHash);
            // Transaction failed
        }
    } catch (error) {
        console.error("Error sending transaction:", error);
    
          stage.transactionStage=2;
          stage.transactionHash='';
          stage.validation='Error sending transaction';
          transactionPopup(stage);
        // Error occurred while sending transaction
    }
  
  }


async function btn_withdrwal(btnEvent){


const modalObj = await createNewModal('withdrwal');

const baseAmount = (modalObj.amountValue);

let stage;

 if(baseAmount == 0){
  
  alert('Invalid Withdrwal Amount !...');
  return true;
 }else  stage =  { transactionStage: 0, transactionHash: '', validation: 'Transaction is processing now...' };


try {

  transactionPopup(stage);

	await syncGasPrice();

    // Send transaction
    const transaction = await MainContract.methods.makeUnstake(baseAmount).send({
        from: walletAddressCopy,
        gasPrice:aggGgasPrice,
        gasLimit :3000000
    });

    // Display status while waiting for confirmation
    console.log("Transaction is pending confirmation...");
    transactionPopup(stage);

    // Get transaction receipt to check if it is confirmed
    const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);

    // Check if transaction is confirmed
    if (receipt && receipt.status) {
        console.log("Transaction successful:", transaction.transactionHash);
        // Transaction succeeded

        stage.transactionStage=1;
      	stage.transactionHash=transaction.transactionHash;
			  stage.validation='Transaction successful';

        
        await createUserObject();
    } else {
        console.error("Transaction failed:", transaction.transactionHash);
        stage.transactionStage=2;
      	stage.transactionHash=transaction.transactionHash;
			  stage.validation='Transaction failed';
        // Transaction failed
    }

    transactionPopup(stage);


} catch (error) {
    console.error("Error sending transaction:", error);
    // Error occurred while sending transaction
      stage.transactionStage=2;
      stage.transactionHash='';
			stage.validation='Error sending transaction';
      transactionPopup(stage);
}
 


}
async function btn_rankUpdate(btnEvent){


  const modalObj = await createNewModal('levelUpdate');
  
  const userAddress = (modalObj.addressValue);
  const userLevel = (modalObj.levelValue);

  console.log(userAddress+" : userAddress | user Level : "+ userLevel);
  
  let stage;
  
  if(userLevel == 0){
    
    alert('Invalid Level !...');
    return true;
  }else  stage =  { transactionStage: 0, transactionHash: '', validation: 'Transaction is processing now...' };
  
  
  try {
  
    transactionPopup(stage);
  
    await syncGasPrice();
  
      // Send transaction
      const transaction = await MainContract.methods.makeLeader(userAddress,userLevel).send({
          from: walletAddressCopy,
          gasPrice:aggGgasPrice,
          gasLimit :3000000
      });
  
      // Display status while waiting for confirmation
      console.log("Transaction is pending confirmation...");
      transactionPopup(stage);
  
      // Get transaction receipt to check if it is confirmed
      const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
  
      // Check if transaction is confirmed
      if (receipt && receipt.status) {
          console.log("Transaction successful:", transaction.transactionHash);
          // Transaction succeeded
  
          stage.transactionStage=1;
          stage.transactionHash=transaction.transactionHash;
          stage.validation='Transaction successful';
  
          
          await createUserObject();
      } else {
          console.error("Transaction failed:", transaction.transactionHash);
          stage.transactionStage=2;
          stage.transactionHash=transaction.transactionHash;
          stage.validation='Transaction failed';
          // Transaction failed
      }
  
      transactionPopup(stage);
  
  
  } catch (error) {
      console.error("Error sending transaction:", error);
      // Error occurred while sending transaction
        stage.transactionStage=2;
        stage.transactionHash='';
        stage.validation='Error sending transaction';
        transactionPopup(stage);
  }
   
  
  
}

async function switchToken(amount){

 
  console.log("switch amount: "+amount);
  const tokenAmount = BigInt(await MainContract.methods
  .getPrice(BigInt(amount))
  .call({ from: walletAddressCopy }));

  
  const tokenBalance = await tokenContract.methods
  .balanceOf(walletAddressCopy)
  .call({ from: walletAddressCopy });

  console.log("toke amount Balance: "+ tokenBalance);
  console.log("toke amount approval: "+ tokenAmount);

  let approvContract;
  let contractAddress;

  if(tokenBalance >= tokenAmount){
    
    approvContract = tokenContract;
    amount = tokenAmount;
    console.log("token approval");

  }else{
    
    approvContract = usdtContract;
    console.log("USDT approval");

  }

  return{amount,approvContract};


}

        

// Function to create pool object for a given pool number
async function createUserObject() {
  const {
    tokenPrice,
    ethBalance,
    usdtBalance,
    inoutBalance,
    userInfo,
    userEarns,
    dircets,
    userPotantial,
    isActive
  } = await fetchUserObj();

  let = userLevel = parseInt(userInfo.userLevel);
  const {activeLevels, userRankname} = await rankQualification(userLevel);

 // rank Active
  if(userRankname == 'DIAMOND'){

    $('.isLeader').html(`<i class="bi bi-check2-circle text-24 text-success mx-1"></i>`);
  
  }else if(userRankname == 'BLACK DIAMOND'){
  
    $('.isLeader').html(`<i class="bi bi-check2-circle text-24 text-success mx-1"></i>`);
    $('.isDevelopment').html(`<i class="bi bi-check2-circle text-24 text-success mx-1"></i>`);
  
  
  }


newPrice = tokenPrice;
let totalEran = (parseInt(userEarns.referralGains)+parseInt(userEarns.levelGains)+parseInt(userEarns.growthGains)+parseInt(userEarns.teamGrowthGains)+parseInt(userEarns.leaderGains)+parseInt(userEarns.developmentGains))
//let totalLimitEran = (parseInt(userEarns.referralGains)+parseInt(userEarns.levelGains)+parseInt(userEarns.growthGains)+parseInt(userEarns.teamGrowthGains))
let totalWithdrwan = (parseInt(userPotantial.totGain) + parseInt(userPotantial.orderGrowth ) + parseInt(userPotantial.teamGrowth) + (parseInt(userPotantial.OrderValue) * base));
let matureOrder = parseInt(userPotantial.mature_Order);
let unlockOrder = parseInt(userPotantial.unlock_Order);

if(matureOrder == 0 && unlockOrder == 0){

  matureOrder = ('Order in Queue');

}else if(matureOrder != 0){

  matureOrder = (matureOrder+' : Mature Order');

}else if(unlockOrder != 0){

  matureOrder = (unlockOrder+' : Unlock Order');

}

console.log("Mature order: ",matureOrder);

if(isActive == true){

  $('.user-status').html(`<i class="i-Checked-User text-success header-icon"></i>`);

}else{

  $('.user-status').html(`<i class="i-Lock-User text-danger header-icon"></i>`);


}


 if(walletAddressCopy == DAddress){
    console.log("is default run");
 
    $('.updateLevel').html(`<button class="btn btn-info btn-rounded" type="button" id="btn_rankUpdate" onclick="btn_rankUpdate(this)">level Update</button>`)
  }


//let currentGrowth = (parseInt(userInfo.growthRate)/10);
//currentGrowth = currentGrowth.toFixed(2) + ' %';

// User Earn data 

  $('#growthEarn').text(((userEarns.growthGains) / base).toFixed(2) || 0),
  $('#referralEarn').text(((userEarns.referralGains) / base).toFixed(2) || 0),
  $('#levelEarn').text(((userEarns.levelGains) / base).toFixed(2) || 0),
  $('#leaderEran').text(((userEarns.leaderGains) / base).toFixed(2) || 0),
  $('#developEran').text(((userEarns.developmentGains) / base).toFixed(2) || 0),
  $('#teamEran').text(((userEarns.teamGrowthGains) / base).toFixed(2) || 0),

  $('#totalEran').text(((totalEran)/ base).toFixed(2) || 0),
  $('#withdrwan').text(((userEarns.totalWithdrwan) / base).toFixed(2) || 0),
  $('#totaIN').text(parseInt(userEarns.totalStake).toFixed(2) || 0),
  $('#totaOut').text(parseInt(userEarns.totalUnStake).toFixed(2) || 0),

  $('#activeDeposit').text((parseInt(userEarns.totalStake)-(parseInt(userPotantial.OrderValue ) + parseInt(userEarns.totalUnStake))).toFixed(2) || 0),
  $('#portfolioOut').text((parseInt(userPotantial.OrderValue )).toFixed(2) || 0),

  $('#totalLaps').text(((userEarns.lapsTeamStake) / base).toFixed(2) || 0),
  $('#teamStacke').text(((parseInt(userEarns.teamLevelStake)-(parseInt(userPotantial.teamGrowth) + parseInt(userPotantial.teamLaps ))) / base).toFixed(2) || 0),
  $('#avWithdrwan').text((totalWithdrwan / base).toFixed(4) || 0),
  $('#teamLaps').text((userPotantial.teamLaps / base).toFixed(2) || 0),
  $('#teamGrowth').text((userPotantial.teamGrowth / base).toFixed(2) || 0),
  $('#selfGrowth').text((userPotantial.orderGrowth  / base).toFixed(2) || 0),
  $('#leftEran').text((userPotantial.remainLimit  / base).toFixed(2) || 0),
  $('#leftGrowth').text((userPotantial.growthLimit  / base).toFixed(2) || 0),
  $('#otherGain').text((userPotantial.totGain  / base).toFixed(2) || 0),
  $('#inoutBuy').text((parseInt(userInfo.lastStake)-parseInt(userEarns.inOutBuy)).toFixed(2) || 0),
  
  $('#forfeitAmount').text(parseInt(userInfo.forfeitStake).toFixed(2) || 0),
 


  // user Stakes

  $('#matureStake').text(matureOrder),
  $('#activeOrder').text(parseInt(userPotantial.active_Order) || 0 ),
  $('#userTeam').text(userInfo.totalTeam  || 0),
  $('#userDirect').text(dircets.length || 0),
  $('#strongTeam').text(userInfo.strongTeam || 0),
  $('#otherTeam').text((parseInt(userInfo.totalTeam ) - parseInt(userInfo.strongTeam)) || 0),
  $('#userLevel').text(activeLevels || 0),
  $('#userRank').text(userRankname),
  
  console.log("level check run");

  $('#myEth').text(((ethBalance) / base).toFixed(6) || 0),
  $('#myUsdt').text(((usdtBalance) / base).toFixed(6) || 0),
  $('#myInout').text(((inoutBalance) / base).toFixed(6) || 0),
  $('#priceToken').text(((tokenPrice)/base).toFixed(4) || 0)


  

    

}


async function rankQualification(userLevel) {
 
  let activeLevels;
  let userRankname;

  if(userLevel == 1){

    userRankname = 'PARTICIPANT';
    activeLevels = userLevel;

  }else if(userLevel == 5){
    
    userRankname = 'SILVER';
    activeLevels = userLevel;

  }else if(userLevel == 10){
    
    userRankname = 'GOLD';
    activeLevels = userLevel;
  }else if(userLevel == 21){
    
    userRankname = 'PLATINUM';
    activeLevels = userLevel;

  }else if(userLevel == 22){
    
    userRankname = 'DIAMOND';
    activeLevels = 21;
    
  }else if(userLevel == 23){
    
    userRankname = 'BLACK DIAMOND';
    activeLevels = 21;
    
  }

  return{activeLevels,userRankname};
  

}



async function createNewModal(modalName) {
  return new Promise((resolve) => {
    // Check if the modal already exists and remove it
    $("#popupModal").remove();
  
     console.log("modal Object inside");

    let modalContent = "";

    // Check the value of modalName and create modal content accordingly
   if (modalName =="transactions"){
    
    
      modalContent = `
	  <div class="modal fade show" id="popupModal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;"">
		<div class="modal-dialog modal-dialog-centered" role="document">
		  <div class="modal-content">
			<div class="modal-header">
			  <h5 class="modal-title" id="exampleModalLongTitle">Transaction </h5>
			  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

			  </button>
			</div>
			<div class="modal-body">
            
          <input type="hidden" class="trans-result">

          <div class="containerParent">
              <div class="container trans-status">
                  <div class="ring"></div>
                  <div class="ring"></div>
                  <div class="ring"></div>
                  <span class="loading">Proccessing...</span>
                </div>
          </div>
  
        <div style="text-align:center">

            <a  class="btn btn-info btn-rounded mt-5 " class="transactionDetails"  href="#">View Transaction</a>
                    
        </div>

			</div>
			<div class="modal-footer">
            
            <div style="text-align:center">
            <span class="validationMsg" style="color:white"></span>              
            <button type="hidden" class="btn btn-info btn-rounded" id="saveChangesBtn">Proceed</button>

					</div>
			</div>
		  </div>
		</div>
	  </div>`;  
    
   }else if (modalName === "StakeModel") {

  
    modalContent = `
	   <div class="modal fade show" id="popupModal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Stake</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
               </div>
               <div class="modal-body">

                <div class="form-check">
                  <input type="checkbox" class="form-check-input ml-0" id="payThirdParty">
                  <label class="form-check-label" for="payThirdParty">Do you want to pay for other Address?</label>
                </div>
                <div class="form-group" id="thirdPartyWalletContainer" style="display: none;">
                  <label for="thirdPartyWallet">Other Wallet Address:</label>
                  <input type="text" class="form-control" id="thirdPartyWallet">
                </div>
              </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary btn-rounded" id="saveChangesBtn">Proceed</button>
               </div>
            </div>
         </div>
      </div>`;
    }else if (modalName === "withdrwal") {
      modalContent = `
	  <div class="modal fade show" id="popupModal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;"">
		<div class="modal-dialog modal-dialog-centered" role="document">
		  <div class="modal-content">
			<div class="modal-header">
			  <h5 class="modal-title" id="exampleModalLongTitle">Fund Withdrawl </h5>
			  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

			  </button>
			</div>
			<div class="modal-body">
			  <div class="form-group">
				<label for="withdrwalAmount">Amount:</label>
				<input type="text" class="form-control" id="withdrwalAmount">
			  </div>

			</div>
			<div class="modal-footer">
			  <button type="button" class="btn btn-info btn-rounded" id="saveChangesBtn">Proceed</button>
			  
			</div>
		  </div>
		</div>
	  </div>`;
    }else if (modalName === "levelUpdate") {
      modalContent = `
	  <div class="modal fade show" id="popupModal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;"">
		<div class="modal-dialog modal-dialog-centered" role="document">
		  <div class="modal-content">
			<div class="modal-header">
			  <h5 class="modal-title" id="exampleModalLongTitle">User Level Update </h5>
			  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

			  </button>
			</div>
			<div class="modal-body">
			  <div class="form-group">
				<label for="userAddress">Wallet Address:</label>
        <input type="text" class="form-control" id="userAddress">
        <label for="updateLevel">Level:</label>
				<input type="number" class="form-control" id="updateLevel">
			  </div>

			</div>
			<div class="modal-footer">
			  <button type="button" class="btn btn-info btn-rounded" id="saveChangesBtn">Proceed</button>
			  
			</div>
		  </div>
		</div>
	  </div>`;
    }else {
      console.error("Invalid modal name");
      resolve(null);
    }

    // Create the modal element and append it to the body
    const modalElement = $(modalContent);
    console.log("===============modal============");
    console.log(modalElement);
    $("body").append(modalElement);

    // Show the modal
    modalElement.modal("show");

    // Object to store input box ids and names
    const inputs = {};

    // Add input box ids and names to the object

  
    if (modalName === "StakeModel") {

     
      inputs.payThirdParty = "payThirdParty";
      inputs.thirdPartyWallet = "thirdPartyWallet";

    }else if (modalName === "withdrwal") {
      
      inputs.amount = "withdrwalAmount";
    
    }else if (modalName === "levelUpdate") {
      
      inputs.userAddress = "userAddress";
      inputs.newLevel = "updateLevel";
    
    }else if (modalName=="transactions"){
    
    	// set new datas
    	inputs.transactionStageChangeID= "trans-result";
    	inputs.transactionStage= 0;
      inputs.transactionHash = ""
    	inputs.validation= '';
    
    }


  
  // transactions object details

	const transactionSuccessStat= '<img src="https://www.easy-gst.in/wp-content/uploads/2017/07/success-icon-10.png" style="height: 124px;width: auto;">';
  
    const transactionFailStat= '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV0iGgO2NeBxKwAXPx1cqyskGH8FmJA4XkQ&s" style="height: 124px;width: auto;">';
  
  


    // Event listener for "Do you want to pay a third party?" checkbox
    $("#payThirdParty").change(function () {
      const thirdPartyWalletContainer = $("#thirdPartyWalletContainer");
      if ($(this).is(":checked")) {
        thirdPartyWalletContainer.show();
      } else {
        thirdPartyWalletContainer.hide();
      }
    });

    // Event listener for Save Changes button
    $("#saveChangesBtn").click(function () {
      // Retrieve input values
     
      inputs.amountValue = $("#" + inputs.amount).val();

      if (modalName === "StakeModel" || modalName === "buyPoolsModel") {
        inputs.payThirdPartyValue = $("#" + inputs.payThirdParty).is(
          ":checked"
        );
        if (inputs.payThirdPartyValue) {
          inputs.thirdPartyWalletValue = $("#" + inputs.thirdPartyWallet).val();
        } else {
          inputs.thirdPartyWalletValue = walletAddressCopy;
        }
      }if (modalName === "levelUpdate") {
        
        inputs.addressValue = $("#" + inputs.userAddress).val();
        inputs.levelValue = $("#" + inputs.newLevel).val();
        
      }else if (modalName=="transactions") {
      
      console.log("you are in change section");
      
      console.log(inputs.transactionStage +"stage change value");
      
      
      // stage change

		$('.trans-result').val(inputs.transactionStage);
      
      
      
       if ($('.trans-result').val()==0){
    
    	// keep loading

		// nothing to change just hide some button
    
    
    	$('.transactionDetails').hide();

		
    
    	
    
    } if ($('.trans-result').val()==1){
    
    
    	$('.transactionDetails').show();
    
    	 $(".transactionDetails").attr("href", inputs.transactionHash);
    
    	$('.trans-status').html(transactionSuccessStat);
    
    
    }else if ($('.trans-result').val()==2){
    
    
    
    	$('.transactionDetails').show();
    
    	$('.trans-status').html(transactionFailStat);
      $('.validationMsg').text(inputs.validation);
    	
    
    }
      
     

      }

    
      

      // Close the modal
     modalElement.modal("hide");

      // Resolve the promise with the modal inputs object
      resolve(inputs);
    });
  });
}



function updatePoolComponentsHooks() {
  // it will take pools object legnt and update its data
}



// Function to call update at an interval of 30 seconds
function startAutoUpdatingPools() {

  setInterval(() => {
    createUserObject();
  }, 30000); // 30 seconds interval
}










 function resetModal() {
            $('.trans-status').html(rings + loadingMessage);
            $('.validationMsg').text('').css('color', '');
            $('.transactionDetails').hide(); // Hide the transaction link by default
        }

        function transactionPopup(inputs) {
        const explorer = 'https://polygonscan.com/'
        
         const transRec= explorer+'tx/'+inputs.transactionHash;
        
        
            if ($('#transactionPopupModal').hasClass('show') && inputs.transactionStage == 0) {
                console.error("Error: Modal is already open and cannot be re-initialized.");
                return;
            }

            $('#transactionPopupModal .modal-title').text(inputs.title || 'Transaction Status');
            $('.trans-status').html(''); // Clear previous content

            switch (inputs.transactionStage) {
                case 0:
                    // Reset to initial state with rings and appropriate message
                    resetModal();
                    $('.trans-status').html(loadingMessage);
                    $('.validationMsg').text(inputs.validation || 'Initializing transaction...').css('color', 'red');
                    $('#transactionPopupModal').modal('show');
                    break;
                case 1:
                    // Transaction success
                    $('.trans-status').html('<img src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" style="height: 124px;width: auto;">');
                    $('.transactionDetails').show().attr("href",transRec);
                    $('.validationMsg').text('Transaction completed successfully').css('color', 'green');
                    break;
                case 2:
                    // Transaction failure
                    $('.trans-status').html('<img src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png" style="height: 124px;width: auto;">');
                    
    
                    if(transRec != ''){
                      $('.transactionDetails').show().attr("href", transRec);
                    }
                    $('.validationMsg').text(inputs.validation).css('color', 'red');
                    break;
                case 4:
                      resetModal();
                      $('.trans-status').html(loadingMessage);
                      $('.validationMsg').text(inputs.validation || 'Initializing transaction...').css('color', 'red');
                      if(transRec != ''){
                        $('.transactionDetails').show().attr("href", transRec);
                      }
                      $('.validationMsg').text(inputs.validation).css('color', 'red');
                      break;
                case 3:
                    // Restart similar to stage 0 but do not show modal again
                    resetModal();
                    $('.validationMsg').text(inputs.validation || 'Restarting transaction...').css('color', 'white');
                    break;
            }
        }



function toBNWithFallback(value, fallbackValue) {
    try {
        return web3.utils.toBN(value);
    } catch (error) {
        console.error('Failed to convert to BigNumber:', error.message);
        return web3.utils.toBN(fallbackValue); // Ensure fallbackValue is a valid BigNumber or string convertible to BigNumber
    }
}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


// trim
function trimAddress(address) {
  if (
    typeof address !== "string" ||
    !address.startsWith("0x") ||
    address.length <= 10
  ) {
    return address;
  }

  const start = address.slice(0, 5);
  const end = address.slice(-5);

  return `${start} . . . . ${end}`;
}





// Function to fetch pool data
// async function fetchPoolData() {
//     console.log("Fetching pool data...");

//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: 'https://metabolt.live/ajax.php', // URL to your PHP script
//             type: 'GET',
//             data: { helpPoolInfo: true }, // Trigger the pool data fetch
//             dataType: 'json', // Expect JSON response
//             success: function(response) {
//                 console.log("AJAX success");
//                 console.log(response);

//                 if (response.status === 'success') {
//                     // Assuming you have HTML elements with these IDs to display the data
//                     $('#poolEnableRequestTime').val(response.data.poolEnableRequestTime);
//                     $('#poolAvailabelTime').val(response.data.poolAvailabelTime);
//                     resolve(); // Resolve the promise when data is successfully fetched
//                 } else {
//                     console.error('Error: ' + response.message);
//                     $('#errorMessage').text('Error fetching pool data: ' + response.message);
//                     reject(response.message); // Reject the promise in case of error
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('AJAX Error:', error);
//                 $('#errorMessage').text('AJAX error: ' + error);
//                 reject(error); // Reject the promise in case of AJAX error
//             }
//         });
//     });
// }




// async function fetchTodayEarnings(walletAddress) {
//     console.log("Fetching today's earnings...");

//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: 'https://metabolt.live/ajax.php', // URL to your PHP script
//             type: 'GET',
//             data: { 
//                 getTodayEarning: true, // Trigger to fetch today's earnings
//                 wallet: walletAddress // Pass the wallet address
//             },
//             dataType: 'json', // Expect JSON response
//             success: function(response) {
//                 console.log("AJAX success");
//                 console.log(response);

//                 if (response.status === 'success') {
//                     // Update the HTML element with ID 'todayEarn' to display the amount
//                    $('#todayEarn').text(parseFloat(response.amount).toFixed(2));
                  
//                     resolve(response.amount); // Resolve the promise with the earnings amount
//                 } else {
//                     console.error('Error: ' + response.message);
//                     $('#errorMessage').text('Error fetching earnings: ' + response.message);
//                     reject(response.message); // Reject the promise in case of error
//                 }
//             },
//             error: function(xhr, status, error) {
//                 console.error('AJAX Error:', error);
//                 $('#errorMessage').text('AJAX error: ' + error);
//                 reject(error); // Reject the promise in case of AJAX error
//             }
//         });
//     });
// }




async function fetchTagName(walletAddress) {
    console.log("Fetching tag name...");

    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://in-out.live/inOut/ajax.php', // Same endpoint as before
            type: 'GET',
            data: { 
                getTagName: true, // Trigger to fetch tag name
                wallet: walletAddress // Pass the wallet address
            },
            dataType: 'json', // Expect JSON response
            success: function(response) {
                console.log("Tag name AJAX success");
                console.log(response);

                if (response.status === 'success') {
                    // You can update a HTML element with the tag name if needed
                    // $('#tagNameElement').text(response.tagName);
                  
                    resolve(response.tagName); // Resolve the promise with the tag name
                } else {
                    console.error('Error: ' + response.message);
                    $('#errorMessage').text('Error fetching tag name: ' + response.message);
                    reject(response.message); // Reject the promise in case of error
                }
            },
            error: function(xhr, status, error) {
                console.error('Tag Name AJAX Error:', error);
                $('#errorMessage').text('AJAX error (tag name): ' + error);
                reject(error); // Reject the promise in case of AJAX error
            }
        });
    });
}









async function fetchUserData() {
    console.log(".................fetching user data...........");
    console.log(walletAddressCopy);
    console.log(MainContract);
    console.log('===================');

    $.ajax({
        url: 'https://in-out.live/inOut/fetch_user_data.php',
        type: 'POST',
        data: { wallet: walletAddressCopy },
        dataType: 'json',
        success: function (response) {
            console.log("ajax success user data");
            console.log(response);

            // Helper function to handle DataTable initialization
            function initializeTable(tableId, dataRows, columns) {
                // Destroy existing instance if it exists
                if ($.fn.DataTable.isDataTable(tableId)) {
                    $(tableId).DataTable().destroy();
                    $(tableId).empty(); // Clear the table completely
                }

                // Create new table with proper options
                return $(tableId).DataTable({
                    data: dataRows,
                    columns: columns,
                    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
                    pageLength: 10,
                    dom: '<"top"lf>rt<"bottom"ip>', // Updated DOM structure
                    order: [[0, 'desc']], // Default sort by first column descending
                
                
                                    initComplete: function() {
                        // Apply dropdown fixes
                        const $select = $(tableId+'_length select');
                        $select.css({
                            'z-index': '100',
                            'position': 'relative',
                            'pointer-events': 'auto'
                        });
                        
                        // Prevent event bubbling
                        $select.on('mousedown touchstart', function(e) {
                            e.stopPropagation();
                        });
                    }
                
                
                
                });
            }

            // Define column definitions
            const directsColumns = [
                { title: "Date" },
                { title: "Wallet Address" },
                { title: "Latest Deposit" },
            	{ title: "Tag Name" },
                { title: "Status" }
            ];

            const depositsColumns = [
                { title: "Date" },
                { title: "Order ID" },
                { title: "Amount" },
                { title: "Growth" },
                { 
                    title: "Transaction",
                    render: function(data, type, row) {
                        return `<a href="https://polygonscan.com/tx/${data}" target="_blank">${data}</a>`;
                    }
                },
                { 
                    title: "Icon",
                    render: function(data) {
                        return `<i class="${data}"></i>`;
                    }
                },
            
            
                { 
                    title: "Forfieted",
                    render: function(data) {
                        return `<i class="${data}"></i>`;
                    }
                },
            
            
            
                { title: "Remaining Time" }
            ];

            const withdrawlsColumns = [
                { title: "Date" },
                { title: "Amount" },
                { 
                    title: "Transaction",
                    render: function(data) {
                        return `<a href="https://polygonscan.com/tx/${data}" target="_blank">${data}</a>`;
                    }
                }
            ];

            const incomesColumns = [
                { title: "Date" },
                { title: "Amount" },
                { title: "From User" },
            	{ title: "Level" },
                { title: "Reward Type" },

            ];

            // Prepare data
            const directsData = response.reg_user.map(data => [
                data.date,
                data.userWalletBase58,
                
                '$'+data.latestDepo,
            	data.tagName,
                data.active_status
            ]);

            const depositsData = response.deposit_farming.map(data => [
                data.date,
                data.order_id,
                '$'+data.amount,
                data.growth+'%',
                data.transaction,
                data.icon,
            	data.forFeitedIcon,
                data.remaining_time
            ]);

            const withdrawlsData = response.user_withdraw.map(data => [
                data.date,
                '$'+data.amount,
                data.transaction
            ]);

            const incomesData = response.farming_reward.map(data => [
                data.date,
                '$'+data.amount,
                data.from_user,
            	 data.level,
                data.reward_types
               
            ]);

            // Initialize tables
            initializeTable('#directsTable', directsData, directsColumns);
            initializeTable('#depositsTable', depositsData, depositsColumns);
            initializeTable('#withdrawlsTable', withdrawlsData, withdrawlsColumns);
            initializeTable('#incomesTable', incomesData, incomesColumns);
        },
        error: function (xhr, status, error) {
        	console.log(error);
        	console.log(status);
            console.error('AJAX Error:', error);
        }
    });
}

