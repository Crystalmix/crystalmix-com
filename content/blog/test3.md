Title: Meet new Serverauditor feature - Snippets
Date: 2015-07-03 18:35
Tags: ios, hello
Author: Anton Karpov

Snippets is our new feature that will be available in Serverauditor 2.1.0 and above for iOS. So let’s see what this feature brings into the application.

You may use the application every day or from time to time in order to solve tasks as efficiently as possible. In particular, this means that it would be great if you are able to automate your actions somehow. The first thing that may come up in your mind is a startup command that will be executed when you are connecting to a host. For instance, you use the 'screen' utility all the time so there is no doubt that once you are connected to your host you will run `screen -r`. Second, you may want to run a command on the server without the need to open a shell. Moreover, what about running a script in the terminal just by conveniently selecting it from the list? There could be a lot of other cases, but those above look to be the most common.

And now we are going to tell you how it is possible to manage these cases with Snippets. Since this is our first step in this direction we have started with 2 basic things. The first one is a startup snippet. You are able to set a snippet for a host or a group of hosts so once you are connecting to a host it will run the snippet after successful connection.

</br>
<div>
<center> <img alt="one" style="width:25%" src="/media/uploads/images/snippets/host_edit.png"> </center>
</div>
</br>

The second thing is the ability to run a snippet on several active sessions simultaneously. For instance, you need to update some of your hosts. It’s not a big deal with snippets. Connect to your hosts, then go to the Snippets screen and create a new snippet (`apt-get upgrade`). Tap on the snippet, select active sessions and run it. That’s it. Now you can go back, open a terminal, and make sure that update process finished successfully.

</br>
<div>
<center>
<img alt="two2" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/hosts.png">
<img alt="two2" style="padding-left:5px; width:25%"  src="/media/uploads/images/snippets/snippets.png">
<img alt="two2" style="padding-left:5px; width:25%"  src="/media/uploads/images/snippets/active_connections.png">
</center>
</div>
</br>

Snippets can automate some of the tasks that you usually do. But the important question is how to actually write a snippet? Are there some rules? Are there any limitations?

Let’s check out a few tips that will let you be more efficient. And before we start, I want to tell you about some restrictions you need to know. The thing is, every time you press the ‘return’ button when you are writing a script it will be treated as if you pressed the ‘Enter’ button in the terminal. Just keep that in mind when you are doing things.

The first case we will consider is when you want to run, for instance, 3 commands: `pwd`, `foo`, and `ls`. There are several ways to do this depending on how you want to see the results of the commands. Here are some of those ways:

Every next command will be executed only if all the previous commands have been executed successfully:
```
pwd && foo && ls
```

</br>
<div>
<center>
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_example_1.png">
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_result_1.png">
</center>
</div>
</br>

Here a semicolon is just a command separator so every command will be executed:
```
pwd; foo; ls
```

</br>
<div>
<center>
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_example_2.png">
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_result_2.png">
</center>
</div>
</br>

Another way of commands separation which is similar to semicolons is the following:
```
pwd
foo
ls
```

</br>
<div>
<center>
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_example_3.png">
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_result_3.png">
</center>
</div>
</br>

Now we know how to separate the commands. But what can we do to run a snippet as a bash script? That’s super easy. You may just use the following pattern: `bash -c 'your; commands | or_complex pipelines'`. Let’s check a simple example. And remember - don’t press the ‘return’ button.

</br>
<div>
<center>
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_example_4.png">
<img alt="three3" style="padding-left:5px; width:25%" src="/media/uploads/images/snippets/snippets_result_4.png">
</center>
</div>
</br>

So, this is how we have implemented Snippets. Play with them and leave your feedback and suggestions. We will consider every opinion and will improve this feature to provide you with the most efficient instrument ever. And what also important -- Snippets for Android is on its way.