import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tweets } from "./Tweets";
import { Users } from "./Users";

@Index("tweetId", ["tweetId"], {})
@Index("userReactedId", ["userReactedId"], {})
@Entity("tweetsReactions", { schema: "nuvenz_api" })
export class TweetsReactions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tweetId", nullable: true })
  tweetId: number | null;

  @Column("int", { name: "totalLike", nullable: true })
  totalLike: number | null;

  @Column("int", { name: "totalUnlike", nullable: true })
  totalUnlike: number | null;

  @Column("int", { name: "userReactedId", nullable: true })
  userReactedId: number | null;

  @Column("varchar", { name: "status", length: 50 })
  status: string;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @ManyToOne(() => Tweets, (tweets) => tweets.tweetsReactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tweetId", referencedColumnName: "id" }])
  tweet: Tweets;

  @ManyToOne(() => Users, (users) => users.tweetsReactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userReactedId", referencedColumnName: "id" }])
  userReacted: Users;
}
