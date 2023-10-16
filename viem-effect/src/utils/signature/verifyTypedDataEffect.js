import { verifyTypedData } from "viem/actions";
import { wrapInEffect } from '../../wrapInEffect.js';

/**
 * @type {import("../../wrapInEffect.js").WrappedInEffect<typeof verifyTypedData, import("viem/actions").VerifyTypedDataErrorType>}
 */
export const verifyTypedDataEffect = wrapInEffect(verifyTypedData);