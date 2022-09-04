/*--+----+----+----+----+----+----+----+----+----+----+

      DBへのテキストデータ送信用簡易apiコンポーネント
              2022.8.30 Tatsu_hira_s



----+----+----+----+----+----+----+----+----+----+---*/
/*
https://jsonplaceholder.typicode.com/postsにあるpostの状態をapiを叩いて取得する
*/
 import { Fragment, useEffect, useState } from "react";
 import "./styles.css";
 
 export default function App() {
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   // ここに取得したpostsのデータを挿入。取得するまではは何も無いので空配列。
   const [posts, setPosts] = useState([]);
 
  /*
  データを取りに行く間は非同期処理なのでローディング画面を表示する必要あり。
  */
   const getPosts = async () => {
     // ローディング開始
     setIsLoading(true);
 
     // ここから非同期処理(データ取得開始);
     try {
       // https://jsonplaceholder.typicode.com/postsに向けてgetリクエスト
       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
       // 上記のresをコメントアウトし、下記のコメントアウトを外すとエラー表示を確認できる。
       // const res = await fetch("https://");
       const posts = await res.json();
 
       // stateに取得したデータを保存
       setPosts(posts);
     } catch (error) {
       // データ取得に失敗した場合はエラーをtrueにする
       setIsError(true);
       console.log(error);
     } finally {
       // 処理が終わったらLoadingをfalseにする
       setIsLoading(false);
     }
     // https://jsonplaceholder.typicode.com/postsに向けてgetリクエスト
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const posts = await res.json();
     setPosts(posts);
   };
 
   // 関数の実行
   useEffect(() => {
     getPosts();
   }, []);
 
   // データ取得中はローディング表示
   if (isLoading) return <p>...Loading</p>;
   // データ取得中はエラーが起きた場合はエラー表示
   if (isError) return <p>エラーです</p>;
   // データ取得中後、データが空だった場合
   if (posts.length === 0) return <p>投稿がありません</p>;
 
   // 取得したデータを表示
   return (
     <>
       {posts.map((post) => (
         <Fragment key={post.id}>
           <p>タイトル</p>
           <p>{post.title}</p>
 
           <p>投稿内容</p>
           <p>{post.body}</p>
           <p>-----------------</p>
         </Fragment>
       ))}
     </>
   );
 }
