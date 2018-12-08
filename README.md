# README

## membersテーブル
Column | Type | Options
--- | --- | ---
user_id | integer | null: false, foreign_key: true
group_id | integer | index: true, null: false, foreign_key: true

### Association
- belongs_to :group
- hasmany :users



## messagesテーブル

Column | Type | Options
--- | --- | ---
body | text | null: false, foreign_key: true
image | string | null: false, foreign_key: true
group_id | integer | index: true, null: false, foreign_key: true
user_id | integer | null: false, foreign_key: true

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

Column | Type | Options
--- | --- | ---
name | text | index: true, null: false, foreign_key: true
email | text | null: false, foreign_key: true
password | text | null: false, foreign_key: true
user_id | integer | null: false, foreign_key: true

### Association
- belongs_to :menbers
- has_many :messages



## groupテーブル

Column | Type | Options
--- | --- | ---
group_name | text | null: false, foreign_key: true

### Association
has_many :messages
belongs_to:menbers


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
