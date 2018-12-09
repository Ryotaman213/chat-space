# README

## membersテーブル
Column | Type | Options
--- | --- | ---
user_id | references | foreign_key: true
group_id | references | foreign_key: true

### Association
- belongs_to :group
- belongs_to :user



## messagesテーブル

Column | Type | Options
--- | --- | ---
body | text | null: false
image | string | null: false
group_id | references | foreign_key: true
user_id | references | foreign_key: true

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

Column | Type | Options
--- | --- | ---
name | text | index: true, null: false
email | text | null: false, unique: true
password | text | null: false

### Association
- has_many :menbers, through: :groups
- has_many :messages



## groupテーブル

Column | Type | Options
--- | --- | ---
group_name | text | null: false

### Association
has_many :messages
has_many :menbers, through: :users

