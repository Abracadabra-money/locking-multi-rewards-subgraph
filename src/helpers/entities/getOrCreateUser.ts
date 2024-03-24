import { Address, BigInt } from "@graphprotocol/graph-ts";
import { User } from "../../../generated/schema";

export function getOrCreateUser(userAddress: Address): User {
  let user = User.load(userAddress);

  if (user === null) {
    user = new User(userAddress);

    user.unlockedAmount = BigInt.zero();
    user.lockedAmount = BigInt.zero();

    user.save();
  }

  return user;
}
