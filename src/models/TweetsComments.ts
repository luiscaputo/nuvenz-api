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
@Index("userCommentId", ["userCommentId"], {})
@Entity("tweetsComments", { schema: "nuvenz_api" })
export class TweetsComments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tweetId", nullable: true })
  tweetId: number | null;

  @Column("int", { name: "totalLike", nullable: true })
  totalLike: number | null;

  @Column("int", { name: "totalUnlike", nullable: true })
  totalUnlike: number | null;

  @Column("text", { name: "commentary" })
  commentary: string;

  @Column("int", { name: "userCommentId", nullable: true })
  userCommentId: number | null;

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

  @ManyToOne(() => Tweets, (tweets) => tweets.tweetsComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tweetId", referencedColumnName: "id" }])
  tweet: Tweets;

  @ManyToOne(() => Users, (users) => users.tweetsComments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userCommentId", referencedColumnName: "id" }])
  userComment: Users;
}
