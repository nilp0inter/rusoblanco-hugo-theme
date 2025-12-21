---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
categories: []
years: ["{{ now.Format "2006" }}"]
draft: true
---
