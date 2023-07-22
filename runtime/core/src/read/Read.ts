import type {
	Abi,
	AbiParametersToPrimitiveTypes,
	Address,
	ExtractAbiFunction,
	ExtractAbiFunctionNames,
	FormatAbi,
} from 'abitype'
import { ValueOf } from 'viem/dist/types/types/utils'

export type Read<
	TName extends string,
	TAddresses extends Record<number, Address>,
	TAbi extends Abi,
> = <TChainId extends keyof TAddresses>(options?: {
	chainId?: TChainId | number | undefined
}) => {
	[TFunctionName in ExtractAbiFunctionNames<TAbi, 'pure' | 'view'>]: <
		TArgs extends AbiParametersToPrimitiveTypes<
			ExtractAbiFunction<TAbi, TFunctionName>['inputs']
		> &
			any[] = AbiParametersToPrimitiveTypes<
			ExtractAbiFunction<TAbi, TFunctionName>['inputs']
		> &
			any[],
	>(
		...args: TArgs
	) => TArgs['length'] extends 0
		? {
				evmtsContractName: TName
				address: ValueOf<TAddresses>
				abi: [ExtractAbiFunction<TAbi, TFunctionName>]
				humanReadableAbi: FormatAbi<[ExtractAbiFunction<TAbi, TFunctionName>]>
				functionName: TFunctionName
		  }
		: {
				evmtsContractName: TName
				address: ValueOf<TAddresses>
				abi: [ExtractAbiFunction<TAbi, TFunctionName>]
				humanReadableAbi: FormatAbi<[ExtractAbiFunction<TAbi, TFunctionName>]>
				functionName: TFunctionName
				args: TArgs
		  }
}