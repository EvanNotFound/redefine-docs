---
sidebar_position: 1
---

# APlayer

```yaml
plugins:
   aplayer: # APlayer (fixed version)
     enable: false
     audio:
       - name: # audio name
         artist: # audio artist
         url: # audio url
         cover: # audio cover url
       - name:
         artist:
         url:
         cover:
```

## Effect

![Screenshot 2023-03-01 at 8.33.51 PM](https://evan.beee.top/img/2023/03/01/bfba84ee6ee020b9923a94fa9a14a2b7.png)

## Configuration

- Whether `enable` is enabled
- `audio` is the music source
   - `name` music name
   - `artist` singer
   - `url` The `url` of the music source. Can be a relative link or a web link
   - `cover` cover image for the music. Please fill in the link. Can be a relative link or a web link

## Example configuration

```yaml
plugins:
   aplayer: # APlayer
     enable: true
     audio:
       - name: Imagine # audio name
         artist: John Lennon # audio artist
         url: https://evan.beee.top/music/Imagine%20-%20John%20Lennon.mp3 # audio url
         cover: https://evan.beee.top/music/covers/Lennon_Imagine_Sleeve_1975.jpg # audio cover
       - name: Something Just Like This
         artist: Coldplay
         url: https://evan.beee.top/music/Something%20Just%20Like%20This%20-%20The%20Chainsmokers%E3%80%81Coldplay.mp3
         cover: https://evan.beee.top/music/covers/Something_Just_Like_This.png
```



## More

For actual experience, welcome to [Redefine Demo Site](https://redefine.ohevan.com/2022/10/02/theme-demo/)
