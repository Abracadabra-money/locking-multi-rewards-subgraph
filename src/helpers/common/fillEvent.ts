import { Entity, ethereum } from "@graphprotocol/graph-ts";

export function fillEvent(
  entityEvent: Entity,
  contractEvent: ethereum.Event,
): void {
  entityEvent.setBigInt("blockNumber", contractEvent.block.number);
  entityEvent.setBigInt("blockTimestamp", contractEvent.block.timestamp);
  entityEvent.setBytes("transactionHash", contractEvent.transaction.hash);
  entityEvent.setBigInt("logIndex", contractEvent.logIndex);
}
