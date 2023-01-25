const lyrics =
  "[00:14.349]Butterfly, butterfly\\n[00:16.245]Where you gonna go tonight\\n[00:21.581]Wish I was just like you\\n[00:23.459]Maybe then you'll take me high\\n[00:28.007]Away from it all again\\n[00:31.432]Away from my troubles and my sins\\n[00:35.248]Away from the fears inside\\n[00:38.691]Away from the tears I try to hide away, 'cause\\n[00:43.515]I just want to make you smile, but\\n[00:47.060]I know that'll take a while, 'cause I'm\\n[00:53.465]Tryin' to find myself\\n[00:58.034]I just want to make you proud, but\\n[01:01.653]I think that I'm runnin' out of time\\n[01:07.928]To figure it out\\n[01:10.114]\\n[01:12.604]Butterfly, butterfly\\n[01:14.463]Take me on your wings and fly (oh)\\n[01:19.837]Wish I was just like you\\n[01:21.685]Maybe then I'll see the light\\n[01:25.984]And I could be free again\\n[01:29.756]Free from my troubles and my sins\\n[01:33.462]Free from the tears inside\\n[01:37.023]And free from the fears I try to hide away, 'cause\\n[01:41.713]I just want to make you smile, but (oh)\\n[01:45.235]I know that'll take a while, 'cause I'm (oh)\\n[01:51.643]Tryin' to find myself (oh)\\n[01:56.229]I just want to make you proud, but (I just wanna)\\n[01:59.763]I think that I'm runnin' out of (I'm runnin' out o')\\n[02:03.028]Time (woah)\\n[02:06.079]To figure it out\\n[02:09.674]To figure it out (oh woah)\\n[02:12.021]Out (oh woah)\\n[02:13.821]Out (oh woah)\\n[02:16.892]To figure it out\\n[02:19.367]Out\\n[02:24.163]To figure it out\\n[02:25.740]I'm try'na figure this out\\n[02:31.494]To figure it out\\n[02:33.131]I'm try'na figure this out\\n[02:37.831]\\n";
console.log(
  lyrics.split("\\n").map((el) => {
    return el.replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "");
  })
);

export default lyrics;
