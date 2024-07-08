import { User } from "src/common/orm/entities/user.entity";

interface IJwtPayloadUser {
  userId: number;
  refresh?: boolean;
}
interface IRequest extends Request {
  user: User;
}
export type { IJwtPayloadUser, IRequest };
