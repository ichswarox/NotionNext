# 如何用少量图片制作LORAs的建议和技巧

Add icon

Add cover

Add comment

# 如何用少量图片制作LORAs的建议和技巧

选择高质量图片：确保图片清晰且具有代表性，能充分展示你要表达的特征。

多样性：即使数量少，也要尽量选择多样化的图片，涵盖不同的角度、光线和背景。

数据增强：使用数据增强技术，如旋转、翻转、裁剪等，增加训练数据的多样性。

聚焦特征：选择和处理图片时，重点关注你希望LORAs捕捉的具体特征。

预处理：对图片进行适当的预处理，如调整大小、标准化等，以提高训练效果。

渐进式训练：从预训练模型开始，并在你的少量数据上进行微调，这样可以更好地利用已有的知识。

监控和调整：在训练过程中，密切关注模型的表现，并根据需要调整参数和方法。

使用高效工具：利用现有的深度学习框架和工具，如TensorFlow、PyTorch等，能够更高效地进行训练。

通过这些方法，即使只有少量图片，也可以有效地制作出高质量的LORAs。

💡

这里展示的都是通过反复试验得到的结果，是我在特定情况下尝试过的方法。我还需要做很多实验，过度使用这些方法可能会损坏你的LORA。

[

基本要点：



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#76c32de944cc40cc80bbf7df4ae8ebe4)

[

重要的不是数量，而是质量。



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#f1d3934347e141b4a67de115cec7d6f5)

[

制作数据集



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#1388d15e251e42bdbc982de81bf51be3)

[

其他数据集获取方式



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#bffda27bf7d7471ba8f2297dc67c38d9)

[

在其他语言中搜索角色的名字



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#586ec94a2b9e49d18c4eb5896c81777a)

[

"过拟合"是一种特征，而不是你的敌人



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#5ada2071bdae43359fb2f1228c6a3aa1)

[

关于裁剪主体局部的解释



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#10d5ca882be34d9abaa65299c3a8b875)

[

裁剪那些角色与其他人物在一起的图片



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#21f3fe18536243469db6e70708fab78c)

[

重复的裁剪图片



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#ee53b4a2cec34d7fb6f39dc4c8705397)

[

对重复或相似的图片进行旋转和翻转：



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#ba08cee274ee40269b39a9b3413a9247)

[

裁剪多视角的图片?



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#24a20e18558a466baa34803e92524031)

[

因此，单独裁剪概念艺术是有好处的吗？



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#5a8c4d4b6d34469f933c8fc090147826)

[

裁剪NSFW内容，除了裸体:



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#5768050e408f4436bb6830a65ea5cc05)

[

不要过分追求完美



](/neo79/LORAs-a8dc6d3801b44fd58af1104740d54727?pvs=25#86786b7d42c948868de28cfe91d58230)

### 基本要点：

#### 重要的不是数量，而是质量。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F84dd94fa-afad-415b-a385-4772af36d0fc%2FUntitled.png?table=block&id=78066598-cb0d-4360-be6c-5efe496c79d8&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=860&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

通常建议用20张图片来做LORA，但如果你的数据集很好，10-15张也可以。关键是确保服装、角度、姿势和表情多样性。如果可以选，还是选图片多的数据集。如果没选择，就按照这个指南的建议做吧。

质量和数量低？别担心，试试以下的技巧：

#### 制作数据集

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Fb9cdf1e8-1d29-408d-bcc9-8f15cc0a96cf%2FUntitled.png?table=block&id=f566583b-c526-4caf-8a49-f522523706b4&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=1250&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

我最实用的建议是少依赖那些从网上“爬取”图像的合作者。特别是在制作那些粉丝艺数少的角色时，这样做往往效果不佳。虽然需要更多工作，但最终会更有价值。

#### 其他数据集获取方式

你可以找到许多动漫角色图片的网站包括：

Pinterest: 在这里，例如，我找到了《20世纪少年》中菅纳的图片供我的模型使用。这是一个非常好的网站，有时候比Google提供的图片还多。

Gelbooru: 这是一个以booru网站著称，通常上传的图片质量较高。

Pixiv:（需要创建账户，图片质量参差不齐，建议激活查看+18图片选项）

Twitter:（Twitter上的许多图片在Google索引中不会出现，因此有一个账户来搜索图片和粉丝艺术应该是必要的）

Rule 34:（通常质量较低，但有很多粉丝艺术。缺点是它们都是色情的。如果在其他网站上找不到图片，可以尝试使用。你也可以裁剪可能让AI混淆的部分。有两个Rule 34网站，可以尝试并找到最适合你需求的那一个。）

如果你在这些网站上仍然找不到图片，记住以下建议：

#### 在其他语言中搜索角色的名字

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F30af7579-8857-4579-a7c8-83be19c7598a%2FUntitled.png?table=block&id=4b4abae6-821b-4167-9378-83627d2447e9&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=860&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

建议使用日语进行搜索，因为根据经验，如果一个角色是在日本创作的，那么在日本可能会有更多的粉丝艺术。不过，你也可以尝试在其他语言中搜索，看看是否有幸找到。

#### "过拟合"是一种特征，而不是你的敌人

☝

过拟合是指数据集中出现图像或概念重复，导致结果中出现一定程度的模式相似（而非完全相同）的现象。这并不一定是坏事，我们将在下面看到原因。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Fe99ccc4e-5d98-4a23-93f8-071ca3073400%2FEk_H8MoXgAAxaowz.jpg?table=block&id=e7ee8a23-8e19-47ba-98b2-1316a68f3c5e&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=410&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Fac6a444c-4565-4454-bab1-5a07d0267c51%2Fmaxresdefafult.jpg?table=block&id=876b369c-54a5-4335-bc4f-56126fe50f43&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=380&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F2d7ac22c-1c61-4e6a-a2c2-314ae2fb3216%2FEk-gCJUXgEAE2dCa.jpg?table=block&id=086edd64-a453-4d96-950e-b4141459b224&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=410&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

如果你希望强调某个概念具有特定的特征，你需要专注于过拟合。例如，如果你希望某个角色具有与某部动漫版本相似的特征，就需要用更多来自这部动漫的截图来训练AI模型。另一方面，如果你希望角色在风格上更加灵活，可以输入不同风格的多种粉丝艺术作品。举个例子，我们有“Peonia”模型，其中包括5张直接从游戏中截取的Peonia图片和12张粉丝艺术作品。

### 关于裁剪主体局部的解释

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F75a13cef-be3a-49f5-b641-89f575327979%2Fd50801c9ec32aed2b60a5b326bdf437c.jpeg?table=block&id=d21773ff-d817-4121-b3de-240fa71ef58d&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=380&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F7305a6d9-8823-493c-87ff-c4cf8ff5a45a%2FOpera_Instantnea_2023-04-15_193341_gelbooru.com.png?table=block&id=e71f19f6-4afe-470e-ae7e-90716a8a1f1b&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=290&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

> 如果AI能理解这是一个脸部，它也会理解没有脸部的身体，并将其与你的概念结合起来，前提是你也提供了一些整体连接在一起的图像。

有时图片可能不符合必要的质量标准。在这种情况下，我建议你遵循这样的建议：裁剪图片的重要部分，至少要包含或有角色可识别的部分。不要过于追求展示尽可能完整的概念，而是集中于重要的部分，比如服装或躯干（描述人物身体类型的部分）。你还可以添加一些你想突出的有趣部分的图片。例如，如果你的角色臀部突出，加入一张突出其臀部的图片可以加强AI训练中这个概念的理解。

#### 裁剪那些角色与其他人物在一起的图片

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F0847b9f5-0540-4445-aab2-d04f3458b121%2F41fdebf049445748448215c01da8b344.jpg?table=block&id=344f3311-8e5d-4382-9e8c-a5d00b2a7a46&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=480&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Fc46daced-abc1-45ee-8bda-7288f6342ee6%2F70297170c1c2953f7c1969b274begc2ef.jpg?table=block&id=5f05b884-4bdc-42b0-872d-d531cf1f653c&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=170&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

不要过分纠结于寻找角色单独出现的图片，可以找一些其他角色也出现在其中的图片，然后裁剪，只显示你希望AI理解的那个角色。即使你的角色只有很小的一部分可见，也不要担心，因为你可以提供其他图片来弥补。

#### 重复的裁剪图片

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F8b970588-9694-4b9b-8e42-8f2e2cbd9d7f%2FUntitled.png?table=block&id=c716b63c-cfa8-496d-b601-349848d13563&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=600&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F566228e5-ec80-4db1-aa09-2fd176ce6181%2FUntitled.png?table=block&id=ae98d1dd-c6d2-4bba-a720-b8d2510aa92e&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=390&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

有时候你会有一张图片，如果分成几部分，会得到“描述你的角色的有趣独立部分”。例如，在第一个案例中，我们有三个有趣的部分 - 角色的胸部、脸部和服装。利用这个建议来分割和填充图片数据集，尤其是图片数量较少的情况下。

#### 对重复或相似的图片进行旋转和翻转：

许多在线训练平台允许对图片进行“翻转”以改善训练效果。这样做的目的是为了让AI能更好地理解概念，因此我建议不仅翻转，还可以旋转图片以增加其多样性。我们来看一个具体的案例。在Solana的模型中，我使用了同一张图片两次，但一张被裁剪了（因为有一个宝可梦），另一张被旋转了（因为裁剪没有正确显示其头发或靴子）。我可以简单地裁剪头发，然后再裁剪身体的其他部分，保持图片原来的位置吗？我可以，但我选择了改变角度，以减少过度拟合的可能性。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F1cb64852-93cb-4cda-adf1-d79724201999%2Fsample_f220dba12bb787dc6gcd71d86c65ee954.jpg?table=block&id=f2f4b279-e007-41c6-a914-0d11e2effbac&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=660&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F228c9f7c-9336-46b4-9943-a60a837bfe93%2Fsample_f220dba12bb787dc6cd71d86cf65ee954.jpg?table=block&id=f5a376bd-40c6-46d7-aba3-9696c25f5615&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=290&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

#### 裁剪多视角的图片?

在讨论过拟合和裁剪之后，我在训练armin的模型中做的一件事是裁剪角色头部。这可能不好，因为模型可能会理解armin只是“一个头”，因为我重复了“head”的概念，但与此同时，这也是好事，因为可以从不同角度和情绪进行过拟合。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Ff35952a6-ea11-4035-ad70-f191d77331c2%2FUntitled.png?table=block&id=9411f62a-f18c-4110-82f9-dc5826db5294&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=1420&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

#### 因此，单独裁剪概念艺术是有好处的吗？

我并不确定，以防万一，我在阿尔敏模型的Mappa版本中采取了相反的做法，成功获取了类似的图像。我还没有对结果进行详细测试，但我利用这个指南来鼓励任何愿意帮助我的人得出结论，找出最佳的做法。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F41aa54eb-9f48-49d7-9f3d-929b0cfcdd19%2FUntitled.png?table=block&id=09beb369-3f6e-4edf-8a4b-ed6faf64781d&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=910&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

Ask AI

#### 裁剪NSFW内容，除了裸体:

继续讨论裁剪的话题，让我们转到NSFW内容。在创建数据集时，我们如何处理NSFW呢？通常会裁剪掉NSFW内容，但有时会留下一些裸体照片。为什么要留下裸体照片？因为它们帮助AI更好地理解角色的解剖结构，即角色在衣服下面也有皮肤。这对于例如生成角色穿比基尼的照片是有用的。然而，我几乎都会裁剪掉所有涉及性行为的内容，因为常规的AI模型通常无法完全理解如此复杂的动作。如果你确实希望角色做这些事情，我建议添加一个LORA，但不要用硬核的NSFW内容进行训练。以下是一些例子，展示了你应该裁剪以只显示SFW部分的图片（它们已经被裁剪了）：

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F17fef100-6083-49e8-973a-434736ee88f0%2FOpera_Instantnea_2023-05-06_194650_ruhle34.xxx.png?table=block&id=dae894e7-b7cc-402e-8b2e-bc6b5fd040db&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=580&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Fc656a35a-238d-42b0-b875-762811f903da%2F4731622_-_Porkyman_Porkyman_Rangeghr_Solana.jpg?table=block&id=63c4d4ed-fb67-491d-a1c8-b441ff8e2b84&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=480&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

### 不要过分追求完美

有些人可能更喜欢一个与原角色类似但不完全相同的LORA，而其他人可能更挑剔。然而，我个人认为，只要AI理解了概念，并能生成相当不错的新图像，那么这个LORA就是成功的，即使有些缺陷。因此，我通常不会过分关注一些对其他人来说至关重要的部分。当然，这只是我的做事方式而已。

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2F82baddcf-7239-4b1e-8240-f4fe0b8fde9c%2F00031-anything-v4.5-pruned_691688270.png?table=block&id=7f5f20df-ecd6-4181-a5e4-2742e9c35f05&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=580&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff57bd6ab-6dd0-490f-a509-d4d268e1d547%2Feb27cc55-bcb9-42fb-93df-463b5cad42c3%2F00006-anything-v4.5-pruned_351125594.png?table=block&id=a4e9fdef-1df4-4d23-991c-ed7a921930cd&spaceId=f57bd6ab-6dd0-490f-a509-d4d268e1d547&width=580&userId=cb3e5921-6393-4f28-915a-7e3fb9517a9e&cache=v2)

希望这个指南对你有所帮助。我会继续研究，看看如何改进少量图片的数据集质量。

Ori:[https://www.notion.so/spainias/How-to-make-LORAs-with-very-few-images-Advice-and-Tips-b30262a7d1b14604bd7f9c85124f6ab7#3a6b0e6095b04f0eaf6b662a7f17570a](https://www.notion.so/spainias/How-to-make-LORAs-with-very-few-images-Advice-and-Tips-b30262a7d1b14604bd7f9c85124f6ab7#3a6b0e6095b04f0eaf6b662a7f17570a)