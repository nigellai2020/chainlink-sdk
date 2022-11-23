/// <amd-module name="@openswap/chainlink-sdk/contracts/AggregatorProxy.json.ts" />
declare module "@openswap/chainlink-sdk/contracts/AggregatorProxy.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/AggregatorProxy.ts" />
declare module "@openswap/chainlink-sdk/contracts/AggregatorProxy.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export class AggregatorProxy extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(aggregator: string): Promise<string>;
        parseAnswerUpdatedEvent(receipt: TransactionReceipt): AggregatorProxy.AnswerUpdatedEvent[];
        decodeAnswerUpdatedEvent(event: Event): AggregatorProxy.AnswerUpdatedEvent;
        parseNewRoundEvent(receipt: TransactionReceipt): AggregatorProxy.NewRoundEvent[];
        decodeNewRoundEvent(event: Event): AggregatorProxy.NewRoundEvent;
        parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferRequestedEvent[];
        decodeOwnershipTransferRequestedEvent(event: Event): AggregatorProxy.OwnershipTransferRequestedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): AggregatorProxy.OwnershipTransferredEvent;
        acceptOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        aggregator: {
            (): Promise<string>;
        };
        confirmAggregator: {
            (aggregator: string): Promise<TransactionReceipt>;
            call: (aggregator: string) => Promise<void>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        description: {
            (): Promise<string>;
        };
        getAnswer: {
            (roundId: number | BigNumber): Promise<BigNumber>;
        };
        getRoundData: {
            (roundId: number | BigNumber): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        getTimestamp: {
            (roundId: number | BigNumber): Promise<BigNumber>;
        };
        latestAnswer: {
            (): Promise<BigNumber>;
        };
        latestRound: {
            (): Promise<BigNumber>;
        };
        latestRoundData: {
            (): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        latestTimestamp: {
            (): Promise<BigNumber>;
        };
        owner: {
            (): Promise<string>;
        };
        phaseAggregators: {
            (param1: number | BigNumber): Promise<string>;
        };
        phaseId: {
            (): Promise<BigNumber>;
        };
        proposeAggregator: {
            (aggregator: string): Promise<TransactionReceipt>;
            call: (aggregator: string) => Promise<void>;
        };
        proposedAggregator: {
            (): Promise<string>;
        };
        proposedGetRoundData: {
            (roundId: number | BigNumber): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        proposedLatestRoundData: {
            (): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        transferOwnership: {
            (to: string): Promise<TransactionReceipt>;
            call: (to: string) => Promise<void>;
        };
        version: {
            (): Promise<BigNumber>;
        };
        private assign;
    }
    export module AggregatorProxy {
        interface AnswerUpdatedEvent {
            current: BigNumber;
            roundId: BigNumber;
            updatedAt: BigNumber;
            _event: Event;
        }
        interface NewRoundEvent {
            roundId: BigNumber;
            startedBy: string;
            startedAt: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferRequestedEvent {
            from: string;
            to: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            from: string;
            to: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/EACAggregatorProxy.json.ts" />
declare module "@openswap/chainlink-sdk/contracts/EACAggregatorProxy.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/EACAggregatorProxy.ts" />
declare module "@openswap/chainlink-sdk/contracts/EACAggregatorProxy.ts" {
    import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-contract";
    export interface IDeployParams {
        aggregator: string;
        accessController: string;
    }
    export class EACAggregatorProxy extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseAnswerUpdatedEvent(receipt: TransactionReceipt): EACAggregatorProxy.AnswerUpdatedEvent[];
        decodeAnswerUpdatedEvent(event: Event): EACAggregatorProxy.AnswerUpdatedEvent;
        parseNewRoundEvent(receipt: TransactionReceipt): EACAggregatorProxy.NewRoundEvent[];
        decodeNewRoundEvent(event: Event): EACAggregatorProxy.NewRoundEvent;
        parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferRequestedEvent[];
        decodeOwnershipTransferRequestedEvent(event: Event): EACAggregatorProxy.OwnershipTransferRequestedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): EACAggregatorProxy.OwnershipTransferredEvent;
        acceptOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        accessController: {
            (): Promise<string>;
        };
        aggregator: {
            (): Promise<string>;
        };
        confirmAggregator: {
            (aggregator: string): Promise<TransactionReceipt>;
            call: (aggregator: string) => Promise<void>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        description: {
            (): Promise<string>;
        };
        getAnswer: {
            (roundId: number | BigNumber): Promise<BigNumber>;
        };
        getRoundData: {
            (roundId: number | BigNumber): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        getTimestamp: {
            (roundId: number | BigNumber): Promise<BigNumber>;
        };
        latestAnswer: {
            (): Promise<BigNumber>;
        };
        latestRound: {
            (): Promise<BigNumber>;
        };
        latestRoundData: {
            (): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        latestTimestamp: {
            (): Promise<BigNumber>;
        };
        owner: {
            (): Promise<string>;
        };
        phaseAggregators: {
            (param1: number | BigNumber): Promise<string>;
        };
        phaseId: {
            (): Promise<BigNumber>;
        };
        proposeAggregator: {
            (aggregator: string): Promise<TransactionReceipt>;
            call: (aggregator: string) => Promise<void>;
        };
        proposedAggregator: {
            (): Promise<string>;
        };
        proposedGetRoundData: {
            (roundId: number | BigNumber): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        proposedLatestRoundData: {
            (): Promise<{
                roundId: BigNumber;
                answer: BigNumber;
                startedAt: BigNumber;
                updatedAt: BigNumber;
                answeredInRound: BigNumber;
            }>;
        };
        setController: {
            (accessController: string): Promise<TransactionReceipt>;
            call: (accessController: string) => Promise<void>;
        };
        transferOwnership: {
            (to: string): Promise<TransactionReceipt>;
            call: (to: string) => Promise<void>;
        };
        version: {
            (): Promise<BigNumber>;
        };
        private assign;
    }
    export module EACAggregatorProxy {
        interface AnswerUpdatedEvent {
            current: BigNumber;
            roundId: BigNumber;
            updatedAt: BigNumber;
            _event: Event;
        }
        interface NewRoundEvent {
            roundId: BigNumber;
            startedBy: string;
            startedAt: BigNumber;
            _event: Event;
        }
        interface OwnershipTransferRequestedEvent {
            from: string;
            to: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            from: string;
            to: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/Owned.json.ts" />
declare module "@openswap/chainlink-sdk/contracts/Owned.json.ts" {
    const _default_2: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/Owned.ts" />
declare module "@openswap/chainlink-sdk/contracts/Owned.ts" {
    import { IWallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-contract";
    export class Owned extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(): Promise<string>;
        parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): Owned.OwnershipTransferRequestedEvent[];
        decodeOwnershipTransferRequestedEvent(event: Event): Owned.OwnershipTransferRequestedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): Owned.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): Owned.OwnershipTransferredEvent;
        acceptOwnership: {
            (): Promise<TransactionReceipt>;
            call: () => Promise<void>;
        };
        owner: {
            (): Promise<string>;
        };
        transferOwnership: {
            (to: string): Promise<TransactionReceipt>;
            call: (to: string) => Promise<void>;
        };
        private assign;
    }
    export module Owned {
        interface OwnershipTransferRequestedEvent {
            from: string;
            to: string;
            _event: Event;
        }
        interface OwnershipTransferredEvent {
            from: string;
            to: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@openswap/chainlink-sdk/contracts/index.ts" />
declare module "@openswap/chainlink-sdk/contracts/index.ts" {
    export { AggregatorProxy } from "@openswap/chainlink-sdk/contracts/AggregatorProxy.ts";
    export { EACAggregatorProxy } from "@openswap/chainlink-sdk/contracts/EACAggregatorProxy.ts";
    export { Owned } from "@openswap/chainlink-sdk/contracts/Owned.ts";
}
/// <amd-module name="@openswap/chainlink-sdk" />
declare module "@openswap/chainlink-sdk" {
    export * as Contracts from "@openswap/chainlink-sdk/contracts/index.ts";
}
