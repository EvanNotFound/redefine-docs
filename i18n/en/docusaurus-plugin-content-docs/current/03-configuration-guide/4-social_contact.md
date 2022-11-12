# social_contact

````yaml
social_contact: # social contact icons in the first screen, you can add more by using fontawesome icon names
  enable: true
  links:
    github: # your GitHub URL
    instagram: # your Instagram URL
    zhihu: # your ZhiHu URL
    twitter: #yourtwitter URL
    email: # your email
````

Set up third-party social links.

::: caution
Note: `social_contact` only works when first screen is enabled

:::

![Screen Shot 2022-10-01 at 10.09.39 PM](https://evan.beee.top/img/Screen%20Shot%202022-10-01%20at%2010.09.39%20PM.png)

If you want to **change the icon** or **add another 3rd party link**, eg: add Instagram

1. Search for Instagram icons at [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free).
   ![image](https://evan.beee.top/img/image.7phjq0rmu7k.png)

1. Copy the icon name (as shown above) and add it to the `social_contact.links` configuration item in the theme configuration file `_config.redefine.yml`.

````yaml
social_contact:
enable: true
links:
  instagram: https://www.instagram.com/xxxxxxxx
````
