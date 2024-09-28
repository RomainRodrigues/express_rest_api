#!/bin/bash

# Arrêter et supprimer les conteneurs, réseaux, volumes et images créés par Docker Compose pour ce projet
docker compose down --rmi local --volumes --remove-orphans