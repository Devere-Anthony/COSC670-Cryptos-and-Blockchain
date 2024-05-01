import * as React from 'react';
import { ethers } from 'ethers';

const contractAddress = '0x9529e32595cDBFAc7ee4CC4C6620274a2F223ff3';

const contractABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "CareerFair",
  "sourceName": "contracts/CareerFair.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "companyName",
          "type": "string"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "enroll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAttendees",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCompanies",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unenroll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506118e2806100606000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630c0b66911461005c57806320f3b4181461007a5780634165a1bb14610084578063b0c8f9dc146100a2578063e65f2a7e146100be575b600080fd5b6100646100c8565b6040516100719190610f4a565b60405180910390f35b6100826102ef565b005b61008c6104d6565b604051610099919061105c565b60405180910390f35b6100bc60048036038101906100b791906111c7565b610564565b005b6100c661074c565b005b60606101086040518060400160405280600b81526020017f0a436f6d70616e6965733a000000000000000000000000000000000000000000815250610984565b60005b6002805490508110156102175761020a6040518060400160405280600681526020017f25733a202573000000000000000000000000000000000000000000000000000081525060018361015e9190611249565b600284815481106101725761017161127d565b5b906000526020600020018054610187906112db565b80601f01602080910402602001604051908101604052809291908181526020018280546101b3906112db565b80156102005780601f106101d557610100808354040283529160200191610200565b820191906000526020600020905b8154815290600101906020018083116101e357829003601f168201915b5050505050610a1d565b808060010191505061010b565b506002805480602002602001604051908101604052809291908181526020016000905b828210156102e6578382906000526020600020018054610259906112db565b80601f0160208091040260200160405190810160405280929190818152602001828054610285906112db565b80156102d25780601f106102a7576101008083540402835291602001916102d2565b820191906000526020600020905b8154815290600101906020018083116102b557829003601f168201915b50505050508152602001906001019061023a565b50505050905090565b600060018054905011610337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032e90611369565b60405180910390fd5b600080600090505b60018054905081101561048a573373ffffffffffffffffffffffffffffffffffffffff16600182815481106103775761037661127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156103fa575060011515600182815481106103db576103da61127d565b5b9060005260206000200160000160149054906101000a900460ff161515145b1561047d57600191506000600182815481106104195761041861127d565b5b9060005260206000200160000160146101000a81548160ff02191690831515021790555061047c6040518060400160405280601781526020017f0a53747564656e7420257320756e656e726f6c6c65642e00000000000000000081525033610abc565b5b808060010191505061033f565b50806104cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c2906113fb565b60405180910390fd5b6104d3610b58565b50565b6060600380548060200260200160405190810160405280929190818152602001828054801561055a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610510575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105bc57600080fd5b60005b6002805490508110156106d35761067c600282815481106105e3576105e261127d565b5b9060005260206000200180546105f8906112db565b80601f0160208091040260200160405190810160405280929190818152602001828054610624906112db565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b505050505083610c65565b156106c6576106c06040518060400160405280601181526020017f257320616c72656164792061646465642e00000000000000000000000000000081525083610cce565b50610749565b80806001019150506105bf565b5060028190806001815401808255809150506001900390600052602060002001600090919091909150908161070891906115c7565b506107486040518060400160405280600981526020017f25732061646465642e000000000000000000000000000000000000000000000081525082610cce565b5b50565b60005b600180549050811015610853573373ffffffffffffffffffffffffffffffffffffffff16600182815481106107875761078661127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108465760001515600182815481106107e8576107e761127d565b5b9060005260206000200160000160149054906101000a900460ff16151514610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c906116e5565b60405180910390fd5b5b808060010191505061074f565b50600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555060408201518160000160156101000a81548160ff021916908315150217905550505061097a6040518060400160405280601281526020017f53747564656e74732025732061646465642e000000000000000000000000000081525033610abc565b610982610b58565b565b610a1a81604051602401610998919061173e565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b50565b610ab7838383604051602401610a359392919061176f565b6040516020818303038152906040527f5970e089000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b505050565b610b548282604051602401610ad29291906117c3565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b5050565b60036000610b669190610db0565b60005b600180549050811015610c62576001151560018281548110610b8e57610b8d61127d565b5b9060005260206000200160000160149054906101000a900460ff16151503610c5557600360018281548110610bc657610bc561127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8080600101915050610b69565b50565b600081604051602001610c78919061182f565b6040516020818303038152906040528051906020012083604051602001610c9f919061182f565b6040516020818303038152906040528051906020012003610cc35760019050610cc8565b600090505b92915050565b610d668282604051602401610ce4929190611846565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b5050565b610d8181610d79610d84610da5565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b610dd1819050919050565b5080546000825590600052602060002090810190610dce9190610ddb565b50565b610dd961187d565b565b5b80821115610df4576000816000905550600101610ddc565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e5e578082015181840152602081019050610e43565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e8682610e24565b610e908185610e2f565b9350610ea0818560208601610e40565b610ea981610e6a565b840191505092915050565b6000610ec08383610e7b565b905092915050565b6000602082019050919050565b6000610ee082610df8565b610eea8185610e03565b935083602082028501610efc85610e14565b8060005b85811015610f385784840389528151610f198582610eb4565b9450610f2483610ec8565b925060208a01995050600181019050610f00565b50829750879550505050505092915050565b60006020820190508181036000830152610f648184610ed5565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fc382610f98565b9050919050565b610fd381610fb8565b82525050565b6000610fe58383610fca565b60208301905092915050565b6000602082019050919050565b600061100982610f6c565b6110138185610f77565b935061101e83610f88565b8060005b8381101561104f5781516110368882610fd9565b975061104183610ff1565b925050600181019050611022565b5085935050505092915050565b600060208201905081810360008301526110768184610ffe565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6110d482610e6a565b810181811067ffffffffffffffff821117156110f3576110f261109c565b5b80604052505050565b600061110661107e565b905061111282826110cb565b919050565b600067ffffffffffffffff8211156111325761113161109c565b5b61113b82610e6a565b9050602081019050919050565b82818337600083830152505050565b600061116a61116584611117565b6110fc565b90508281526020810184848401111561118657611185611097565b5b611191848285611148565b509392505050565b600082601f8301126111ae576111ad611092565b5b81356111be848260208601611157565b91505092915050565b6000602082840312156111dd576111dc611088565b5b600082013567ffffffffffffffff8111156111fb576111fa61108d565b5b61120784828501611199565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061125482611210565b915061125f83611210565b92508282019050808211156112775761127661121a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112f357607f821691505b602082108103611306576113056112ac565b5b50919050565b600082825260208201905092915050565b7f4e6f2073747564656e747320656e726f6c6c65642e0000000000000000000000600082015250565b600061135360158361130c565b915061135e8261131d565b602082019050919050565b6000602082019050818103600083015261138281611346565b9050919050565b7f53747564656e7420646f65736e2774206578697374206f722069736e2774207260008201527f65676973746572656420616c72656164792e0000000000000000000000000000602082015250565b60006113e560328361130c565b91506113f082611389565b604082019050919050565b60006020820190508181036000830152611414816113d8565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261147d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611440565b6114878683611440565b95508019841693508086168417925050509392505050565b6000819050919050565b60006114c46114bf6114ba84611210565b61149f565b611210565b9050919050565b6000819050919050565b6114de836114a9565b6114f26114ea826114cb565b84845461144d565b825550505050565b600090565b6115076114fa565b6115128184846114d5565b505050565b5b818110156115365761152b6000826114ff565b600181019050611518565b5050565b601f82111561157b5761154c8161141b565b61155584611430565b81016020851015611564578190505b61157861157085611430565b830182611517565b50505b505050565b600082821c905092915050565b600061159e60001984600802611580565b1980831691505092915050565b60006115b7838361158d565b9150826002028217905092915050565b6115d082610e24565b67ffffffffffffffff8111156115e9576115e861109c565b5b6115f382546112db565b6115fe82828561153a565b600060209050601f831160018114611631576000841561161f578287015190505b61162985826115ab565b865550611691565b601f19841661163f8661141b565b60005b8281101561166757848901518255600182019150602085019450602081019050611642565b868310156116845784890151611680601f89168261158d565b8355505b6001600288020188555050505b505050505050565b7f73747564656e7420616c726561647920656e726f6c6c65640000000000000000600082015250565b60006116cf60188361130c565b91506116da82611699565b602082019050919050565b600060208201905081810360008301526116fe816116c2565b9050919050565b600061171082610e24565b61171a818561130c565b935061172a818560208601610e40565b61173381610e6a565b840191505092915050565b600060208201905081810360008301526117588184611705565b905092915050565b61176981611210565b82525050565b600060608201905081810360008301526117898186611705565b90506117986020830185611760565b81810360408301526117aa8184611705565b9050949350505050565b6117bd81610fb8565b82525050565b600060408201905081810360008301526117dd8185611705565b90506117ec60208301846117b4565b9392505050565b600081905092915050565b600061180982610e24565b61181381856117f3565b9350611823818560208601610e40565b80840191505092915050565b600061183b82846117fe565b915081905092915050565b600060408201905081810360008301526118608185611705565b905081810360208301526118748184611705565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea264697066735822122095ab11cf20686a2081ce61ddc424268823f1fdb4403b83cb3eb77634793f593964736f6c63430008180033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80630c0b66911461005c57806320f3b4181461007a5780634165a1bb14610084578063b0c8f9dc146100a2578063e65f2a7e146100be575b600080fd5b6100646100c8565b6040516100719190610f4a565b60405180910390f35b6100826102ef565b005b61008c6104d6565b604051610099919061105c565b60405180910390f35b6100bc60048036038101906100b791906111c7565b610564565b005b6100c661074c565b005b60606101086040518060400160405280600b81526020017f0a436f6d70616e6965733a000000000000000000000000000000000000000000815250610984565b60005b6002805490508110156102175761020a6040518060400160405280600681526020017f25733a202573000000000000000000000000000000000000000000000000000081525060018361015e9190611249565b600284815481106101725761017161127d565b5b906000526020600020018054610187906112db565b80601f01602080910402602001604051908101604052809291908181526020018280546101b3906112db565b80156102005780601f106101d557610100808354040283529160200191610200565b820191906000526020600020905b8154815290600101906020018083116101e357829003601f168201915b5050505050610a1d565b808060010191505061010b565b506002805480602002602001604051908101604052809291908181526020016000905b828210156102e6578382906000526020600020018054610259906112db565b80601f0160208091040260200160405190810160405280929190818152602001828054610285906112db565b80156102d25780601f106102a7576101008083540402835291602001916102d2565b820191906000526020600020905b8154815290600101906020018083116102b557829003601f168201915b50505050508152602001906001019061023a565b50505050905090565b600060018054905011610337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032e90611369565b60405180910390fd5b600080600090505b60018054905081101561048a573373ffffffffffffffffffffffffffffffffffffffff16600182815481106103775761037661127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156103fa575060011515600182815481106103db576103da61127d565b5b9060005260206000200160000160149054906101000a900460ff161515145b1561047d57600191506000600182815481106104195761041861127d565b5b9060005260206000200160000160146101000a81548160ff02191690831515021790555061047c6040518060400160405280601781526020017f0a53747564656e7420257320756e656e726f6c6c65642e00000000000000000081525033610abc565b5b808060010191505061033f565b50806104cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c2906113fb565b60405180910390fd5b6104d3610b58565b50565b6060600380548060200260200160405190810160405280929190818152602001828054801561055a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610510575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105bc57600080fd5b60005b6002805490508110156106d35761067c600282815481106105e3576105e261127d565b5b9060005260206000200180546105f8906112db565b80601f0160208091040260200160405190810160405280929190818152602001828054610624906112db565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b505050505083610c65565b156106c6576106c06040518060400160405280601181526020017f257320616c72656164792061646465642e00000000000000000000000000000081525083610cce565b50610749565b80806001019150506105bf565b5060028190806001815401808255809150506001900390600052602060002001600090919091909150908161070891906115c7565b506107486040518060400160405280600981526020017f25732061646465642e000000000000000000000000000000000000000000000081525082610cce565b5b50565b60005b600180549050811015610853573373ffffffffffffffffffffffffffffffffffffffff16600182815481106107875761078661127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108465760001515600182815481106107e8576107e761127d565b5b9060005260206000200160000160149054906101000a900460ff16151514610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c906116e5565b60405180910390fd5b5b808060010191505061074f565b50600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555060408201518160000160156101000a81548160ff021916908315150217905550505061097a6040518060400160405280601281526020017f53747564656e74732025732061646465642e000000000000000000000000000081525033610abc565b610982610b58565b565b610a1a81604051602401610998919061173e565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b50565b610ab7838383604051602401610a359392919061176f565b6040516020818303038152906040527f5970e089000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b505050565b610b548282604051602401610ad29291906117c3565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b5050565b60036000610b669190610db0565b60005b600180549050811015610c62576001151560018281548110610b8e57610b8d61127d565b5b9060005260206000200160000160149054906101000a900460ff16151503610c5557600360018281548110610bc657610bc561127d565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b8080600101915050610b69565b50565b600081604051602001610c78919061182f565b6040516020818303038152906040528051906020012083604051602001610c9f919061182f565b6040516020818303038152906040528051906020012003610cc35760019050610cc8565b600090505b92915050565b610d668282604051602401610ce4929190611846565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d6a565b5050565b610d8181610d79610d84610da5565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b610dd1819050919050565b5080546000825590600052602060002090810190610dce9190610ddb565b50565b610dd961187d565b565b5b80821115610df4576000816000905550600101610ddc565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e5e578082015181840152602081019050610e43565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e8682610e24565b610e908185610e2f565b9350610ea0818560208601610e40565b610ea981610e6a565b840191505092915050565b6000610ec08383610e7b565b905092915050565b6000602082019050919050565b6000610ee082610df8565b610eea8185610e03565b935083602082028501610efc85610e14565b8060005b85811015610f385784840389528151610f198582610eb4565b9450610f2483610ec8565b925060208a01995050600181019050610f00565b50829750879550505050505092915050565b60006020820190508181036000830152610f648184610ed5565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fc382610f98565b9050919050565b610fd381610fb8565b82525050565b6000610fe58383610fca565b60208301905092915050565b6000602082019050919050565b600061100982610f6c565b6110138185610f77565b935061101e83610f88565b8060005b8381101561104f5781516110368882610fd9565b975061104183610ff1565b925050600181019050611022565b5085935050505092915050565b600060208201905081810360008301526110768184610ffe565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6110d482610e6a565b810181811067ffffffffffffffff821117156110f3576110f261109c565b5b80604052505050565b600061110661107e565b905061111282826110cb565b919050565b600067ffffffffffffffff8211156111325761113161109c565b5b61113b82610e6a565b9050602081019050919050565b82818337600083830152505050565b600061116a61116584611117565b6110fc565b90508281526020810184848401111561118657611185611097565b5b611191848285611148565b509392505050565b600082601f8301126111ae576111ad611092565b5b81356111be848260208601611157565b91505092915050565b6000602082840312156111dd576111dc611088565b5b600082013567ffffffffffffffff8111156111fb576111fa61108d565b5b61120784828501611199565b91505092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061125482611210565b915061125f83611210565b92508282019050808211156112775761127661121a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806112f357607f821691505b602082108103611306576113056112ac565b5b50919050565b600082825260208201905092915050565b7f4e6f2073747564656e747320656e726f6c6c65642e0000000000000000000000600082015250565b600061135360158361130c565b915061135e8261131d565b602082019050919050565b6000602082019050818103600083015261138281611346565b9050919050565b7f53747564656e7420646f65736e2774206578697374206f722069736e2774207260008201527f65676973746572656420616c72656164792e0000000000000000000000000000602082015250565b60006113e560328361130c565b91506113f082611389565b604082019050919050565b60006020820190508181036000830152611414816113d8565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261147d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611440565b6114878683611440565b95508019841693508086168417925050509392505050565b6000819050919050565b60006114c46114bf6114ba84611210565b61149f565b611210565b9050919050565b6000819050919050565b6114de836114a9565b6114f26114ea826114cb565b84845461144d565b825550505050565b600090565b6115076114fa565b6115128184846114d5565b505050565b5b818110156115365761152b6000826114ff565b600181019050611518565b5050565b601f82111561157b5761154c8161141b565b61155584611430565b81016020851015611564578190505b61157861157085611430565b830182611517565b50505b505050565b600082821c905092915050565b600061159e60001984600802611580565b1980831691505092915050565b60006115b7838361158d565b9150826002028217905092915050565b6115d082610e24565b67ffffffffffffffff8111156115e9576115e861109c565b5b6115f382546112db565b6115fe82828561153a565b600060209050601f831160018114611631576000841561161f578287015190505b61162985826115ab565b865550611691565b601f19841661163f8661141b565b60005b8281101561166757848901518255600182019150602085019450602081019050611642565b868310156116845784890151611680601f89168261158d565b8355505b6001600288020188555050505b505050505050565b7f73747564656e7420616c726561647920656e726f6c6c65640000000000000000600082015250565b60006116cf60188361130c565b91506116da82611699565b602082019050919050565b600060208201905081810360008301526116fe816116c2565b9050919050565b600061171082610e24565b61171a818561130c565b935061172a818560208601610e40565b61173381610e6a565b840191505092915050565b600060208201905081810360008301526117588184611705565b905092915050565b61176981611210565b82525050565b600060608201905081810360008301526117898186611705565b90506117986020830185611760565b81810360408301526117aa8184611705565b9050949350505050565b6117bd81610fb8565b82525050565b600060408201905081810360008301526117dd8185611705565b90506117ec60208301846117b4565b9392505050565b600081905092915050565b600061180982610e24565b61181381856117f3565b9350611823818560208601610e40565b80840191505092915050565b600061183b82846117fe565b915081905092915050565b600060408201905081810360008301526118608185611705565b905081810360208301526118748184611705565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea264697066735822122095ab11cf20686a2081ce61ddc424268823f1fdb4403b83cb3eb77634793f593964736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}



function App() {
  const [provider, setProvider] = React.useState();
  const [lastCompany, setLastCompany] = React.useState('');
  const [walletButton, setWalletButton] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.ethereum) {
        setProvider(new ethers.BrowserProvider(window.ethereum));
        console.log("ETH wallet detected");
      } else {
        console.error("No ETH Wallet Detected");
      }
    }
  }, []);

  const ConnectWallet = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      window.alert(`${signer.address} successfully connected!`);
      setWalletButton(false);
    } catch (error) {
      window.alert("Wallet could not be connected.");
    }
  }

  const Enroll = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      await contract.enroll();
      window.alert(`${signer.address} successfully enrolled in career fair.`);
    } catch (error) {
      window.alert("You are already enrolled in career fair.");
    }
  }

  const GetAttendees = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      const attendees = await contract.getAttendees();

      if (attendees.length === 0) {
        window.alert("No one is enrolled");
      } else {
        window.alert(`The follow students are enrolled: ${attendees}\n (See console)`);
        console.log("Current Attendees:");
        for (var i = 0; i < attendees.length; i++)
          console.log(attendees[i]);
      }
    } catch (error) {
      window.alert(error);
    }
  }

  const Unenroll = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      await contract.unenroll();
      window.alert(`${signer.address} successfully unenrolled.`);
    } catch (error) {
      window.alert("You are not enrolled in the career fair.");
    }
  }

  const AddCompany = async(event) => {
    event.preventDefault();
    // take data from textfield and then add it as argument for the addCompany guy
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      // await contract.add("Amazon");
      // setLastCompany(event.target.value);
      await contract.add(lastCompany);
      window.alert(`Owner added company: ${lastCompany}`);
    } catch (error) {
      window.alert("Only the owner can add a company.")
    }
  }

  const handleCompanyInput = (event) => {
    setLastCompany(event.target.value);
  };

  return (
    <>
      {walletButton === true && 
      <button onClick={ConnectWallet}>Connect Wallet</button>
      }
      <br />
      <button onClick={Enroll}>Enroll</button>
      <br />
      <button onClick={Unenroll}>Unenroll</button>
      <br />
      <button onClick={GetAttendees}>See Attendees</button>
      <br />
      <form onSubmit={AddCompany}>
        <button type='submit'>Add Company</button>
        <input type='text' onChange={handleCompanyInput}></input>
      </form>
    </>
  );
}

export default App;