library(babynames)
library(tidyverse)
library(jsonlite)

names <- babynames
applicants <- applicants

heather <- names %>%
  filter(name == 'Heather')

namePlot <- function(inputName, inputSex) {
  name <- names %>%
    filter(name == inputName & sex == inputSex)
  
  ggplot(name, aes(x = year, y = prop)) +
    geom_line()
}

namePlot('Donald', 'M')
namePlot('Richard', 'M')
namePlot('Daniel', 'M')
namePlot('John', 'M')
namePlot('Heather', 'F')
##for each name by gender, calculate the minimum and maxium prop, then find the range. finally, sort them by the range

namesGrouped <- group_by(names, name) %>%
  nest()

namesList <- namesGrouped %>%
  pull(name)

write_json(namesGrouped, './names.json')
write_json(namesList, './namesList.json')

dataPulled <- pull(namesGroupedF, data)
map2(dataPulled, i)



