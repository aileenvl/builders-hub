import { BookOpen, Terminal, Flag, Settings, Server } from 'lucide-react'
import Welcome from "./01_Welcome/Welcome";
import ChainParameters from './02_Configure/ChainParameters';
import Tokenomics from './02_Configure/Tokenomics';
import Permissions from "./02_Configure/Permissions";
import Genesis from "./02_Configure/Genesis";
import FundTempWallet from "./03_Launch/FundTempWallet";
import PrepareValidators from "./03_Launch/PrepareValidators";
import GenerateKeys from "./03_Launch/GenerateKeys";
import LaunchValidators from "./03_Launch/LaunchValidators";
import LaunchRpcNode from "./03_Launch/LaunchRpcNode";
import OpenRPCPort from "./03_Launch/OpenRPCPort";
import AddToWallet from "./AddToWallet";
import DeployContracts from "./DeployContracts/DeployContracts";
import CreateChain from "./03_Launch/CreateChain"
import InitializeValidatorManager from "./InitializeValidatorManager/InitializeValidatorManager";
import WhatsNext from "./WhatsNext";

export const stepGroups = {
    "welcome": {
        title: "Welcome",
        icon: <BookOpen className="size-5" />
    },
    "configure": {
        title: "Configure",
        icon: <Settings className="size-5" />
    },
    "launch-l1": {
        title: "Launch your L1",
        icon: <Server className="size-5" />
    },
    "initialize": {
        title: "Initialize",
        icon: <Terminal className="size-5" />
    },
    "whats-next": {
        title: "What's next?",
        icon: <Flag className="size-5" />
    },
}

export type StepType = {
    title: string;
    component: React.ReactNode;
    group: keyof typeof stepGroups;
}

export const stepList: Record<string, StepType> = {
    "welcome": {
        title: "Welcome",
        component: <Welcome />,
        group: "welcome",
    },
    "chain-parameters": {
        title: "Chain Parameters",
        component: <ChainParameters />,
        group: "configure",
    },
    "tokenomics": {
        title: "Tokenomics",
        component: <Tokenomics />,
        group: "configure",
    },
    "permissions": {
        title: "Permissions",
        component: <Permissions />,
        group: "configure",
    },
    "genesis": {
        title: "Create genesis",
        component: <Genesis />,
        group: "configure",
    },
    "configure-validators": {
        title: "Prepare Validators",
        component: <PrepareValidators />,
        group: "launch-l1",
    },
    "generate-keys": {
        title: "Generate keys",
        component: <GenerateKeys />,
        group: "launch-l1",
    },
    "fund-temp-wallet": {
        title: "Fund temp wallet",
        component: <FundTempWallet />,
        group: "launch-l1",
    },
    "create-chain": {
        title: "Create chain",
        component: <CreateChain />,
        group: "launch-l1",
    },
    "launch-validators": {
        title: "Launch validators",
        component: <LaunchValidators />,
        group: "launch-l1",
    },
    "launch-rpc-node": {
        title: "Launch an RPC node",
        component: <LaunchRpcNode />,
        group: "launch-l1",
    },
    "open-rpc-port": {
        title: "Open RPC port",
        component: <OpenRPCPort />,
        group: "launch-l1",
    },
    "add-to-wallet": {
        title: "Add to wallet",
        component: <AddToWallet />,
        group: "initialize",
    },
    "deploy-contracts": {
        title: "Deploy contracts",
        component: <DeployContracts />,
        group: "initialize",
    },
    "initialize-validator-manager": {
        title: "Initialize validator manager",
        component: <InitializeValidatorManager />,
        group: "initialize",
    },
    "whats-next": {
        title: "What's next?",
        component: <WhatsNext />,
        group: "whats-next",
    }
}
