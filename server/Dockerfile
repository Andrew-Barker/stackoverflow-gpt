# Base image for Python
FROM python:3.9-slim

WORKDIR /app

COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose the Flask app port (adjust if different)
EXPOSE 5000

# Run the app from the src directory
CMD ["python", "src/app.py"]